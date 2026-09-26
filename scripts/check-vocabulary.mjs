import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdtempSync, rmSync } from "node:fs";
import { createRequire } from "node:module";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const output = mkdtempSync(join(tmpdir(), "mot-vocabulary-"));
try {
  execFileSync(process.execPath, [resolve(root, "node_modules/typescript/bin/tsc"), "--module", "commonjs", "--target", "es2020", "--skipLibCheck", "--outDir", output, "lib/words.ts", "lib/study.ts"], { cwd: root, stdio: "inherit" });
  const require = createRequire(import.meta.url);
  const { words, wordById } = require(join(output, "words.js"));
  const { memoryHints } = require(join(output, "memory-hints.js"));
  assert.equal(Object.keys(memoryHints).length, 2100);
  const study = require(join(output, "study.js"));
  assert.equal(words.length, 2100);
  assert.equal(new Set(words.map(w => w.french)).size, 2100);
  assert.equal(new Set(words.map(w => w.id)).size, 2100);
  for (const [index, word] of words.entries()) {
    assert.equal(word.id, `fr-${String(index + 1).padStart(3, "0")}`);
    for (const field of ["french", "meaning", "kind", "category"]) assert.ok(word[field]?.trim(), `${word.id}: ${field}`);
    assert.equal(word.examples.length, 2, word.french);
    assert.equal(word.memoryHint, memoryHints[word.id]);
    assert.ok(word.memoryHint, `${word.french}: every word needs a memory cue`);
    {
      assert.ok(word.memoryHint.text.trim(), `${word.french}: empty memory hint`);
      assert.ok(["english", "association", "playful"].includes(word.memoryHint.kind));
      assert.ok(!word.examples.some(e=>e.french===word.memoryHint.text||e.translation===word.memoryHint.text), `${word.french}: duplicated example instead of memory hint`);
      assert.ok(!/发音|读音|音节|元音|辅音|鼻化|圆唇|音标|合读|连读|读成|读作|读为|要读|另读|[\u0250-\u02af]/u.test(word.memoryHint.text), `${word.french}: pronunciation filler`);
    }
    assert.notEqual(word.examples[0].french, word.examples[1].french, word.french);
    for (const example of word.examples) {
      assert.ok(example.french.trim());
      assert.match(example.translation, /[\u4e00-\u9fff]/u);
      assert.ok(!example.french.includes("undefined"));
    }
    assert.equal(word.example, word.examples[0].french);
    assert.equal(word.translation, word.examples[0].translation);
    for (let attempt = 0; attempt < 3; attempt++) {
      const options = study.optionsFor(word);
      assert.equal(options.length, 4, word.french);
      assert.equal(new Set(options.map(w => w.id)).size, 4);
      assert.equal(new Set(options.map(w => w.meaning)).size, 4);
      assert.equal(options.filter(w => w.id === word.id).length, 1);
    }
  }
  const sizes = { core: 2000, intermediate: 100, basic: 120, all: 2100 };
  for (const [deck, count] of Object.entries(sizes)) assert.equal(study.deckWords(deck).length, count);
  const core = new Set(study.deckWords("core").map(w => w.id));
  assert.ok(study.deckWords("intermediate").every(w => !core.has(w.id)));
  assert.ok(study.deckWords("basic").every(w => core.has(w.id)));
  assert.equal(study.makeQueue("learn", {})[0].french, "pouvoir");
  assert.equal(study.makeQueue("learn", {}).length, 2000);
  assert.equal(study.makeQueue("learn", {}, "all").length, 2100);
  let continuous = study.freshQueue(study.makeQueue("learn", {}));
  const originalQueue = continuous.queue;
  for (let i = 0; i < 25; i++) {
    const word = continuous.queue[continuous.index];
    assert.equal(word.id, originalQueue[i].id);
    continuous = study.advanceQueue(continuous, {wordId: word.id, selectedId: word.id, action: "answer"});
  }
  assert.equal(continuous.index, 25, "No reset at ten or twenty answers");
  assert.equal(continuous.queue[continuous.index].id, originalQueue[25].id);
  const retryWord = continuous.queue[continuous.index];
  const retry = study.advanceQueue(continuous, {wordId: retryWord.id, selectedId: null, action: "answer"});
  assert.equal(retry.queue[continuous.index + 4].id, retryWord.id);
  // Both an introduced-only word and future-due words must remain reviewable.
  const now = Date.now(), progress = {};
  for (const [index, word] of words.entries()) progress[word.id] = { word_id: word.id, seen: index % 2, correct: 0, mistakes: 0, streak: 0, due: now + 86400000, last_seen: now - index, mastered: 0 };
  for (const [deck, count] of Object.entries(sizes)) {
    assert.equal(study.reviewWords(progress, now, deck).length, count);
    assert.equal(study.dueWords(progress, now, deck).length, 0);
  }
  const legacy = words[0], newWord = words[1000], extension = study.deckWords("intermediate")[0];
  for (const word of [legacy, newWord, extension]) progress[word.id].mastered = 1;
  assert.equal(study.reviewWords(progress, now, "all").length, 2097);
  assert.equal(study.reviewWords(progress, now, "core").length, 1998);
  assert.equal(study.makeQueue("review", progress, "core").length, 1998);
  assert.equal(study.reviewWords(progress, now, "intermediate").length, 99);
  assert.ok(study.makeQueue("review", progress).every(w => !progress[w.id].mastered));
  const dueId = words[1001].id;
  progress[dueId].last_seen = now - 100000;
  assert.equal(study.reviewWords(progress, now, "core")[0].id, dueId);
  const reviewQueue=study.freshQueue(words.slice(0,12));
  for(const action of ["answer","hint"]){
    const moved=study.advanceQueue(reviewQueue,{wordId:words[0].id,selectedId:null,action},"review");
    assert.equal(moved.queue.at(-1).id,words[0].id);
    assert.equal(moved.queue[moved.index].id,words[1].id);
    assert.equal(moved.queue.slice(moved.index,-1).length,11);
  }
  const dayWord=words[1001].id;
  let daily=study.projectAction({}, {wordId:dayWord,action:"introduce"},now);
  const beforeHint={...daily[dayWord]};
  daily=study.projectAction(daily,{wordId:dayWord,action:"hint"},now+1);
  for(const key of ["seen","correct","mistakes","streak"])assert.equal(daily[dayWord][key],beforeHint[key]);
  assert.equal(study.reviewWords(daily,now,"all").length,1);
  daily=study.projectAction(daily,{wordId:dayWord,selectedId:dayWord,action:"answer"},now);
  assert.equal(study.reviewWords(daily,now,"all").length,0);
  assert.equal(study.makeQueue("review",daily,"all").length,0,"No same-day refill after completion");
  const tomorrow=new Date(now);tomorrow.setDate(tomorrow.getDate()+1);tomorrow.setHours(0,0,0,0);
  assert.equal(study.reviewWords(daily,tomorrow.getTime(),"all").length,1);
  const round = study.freshQueue(study.makeQueue("learn", { [newWord.id]: progress[newWord.id] }));
  assert.ok(round.queue.every(w => w.id !== newWord.id));
  const current = round.queue[0];
  const introduced = study.advanceQueue(round, { wordId: current.id, action: "introduce" });
  assert.equal(introduced.queue[4].id, current.id);
  const keptCurrent = introduced.queue[introduced.index];
  const removedPrevious = study.removeUpcomingWord(introduced,current.id);
  assert.equal(removedPrevious.index,introduced.index);
  assert.equal(removedPrevious.queue[removedPrevious.index].id,keptCurrent.id);
  assert.ok(removedPrevious.queue.slice(removedPrevious.index).every(w=>w.id!==current.id));
  assert.equal(removedPrevious.queue[0].id,current.id,"Previously shown history is retained");
  const encountered = study.projectAction({}, {wordId:current.id,action:"introduce"},now);
  const previousMastered = study.projectAction(encountered,{wordId:current.id,action:"master"},now);
  assert.equal(previousMastered[current.id].seen,encountered[current.id].seen);
  assert.equal(study.reviewWords(previousMastered,now,"all").length,0);
  const restored = study.projectAction(previousMastered,{wordId:current.id,action:"restore"},now);
  assert.equal(study.reviewWords(restored,now,"all")[0].id,current.id);
  assert.throws(()=>study.removeUpcomingWord(study.freshQueue([current]),current.id));
  const mastered = study.advanceQueue(round, { wordId: current.id, action: "master" });
  assert.ok(mastered.queue.slice(mastered.index).every(w => w.id !== current.id));
  // Both directions use the same answer IDs and scheduling; reverse prompts must not leak audio.
  for(const word of words){
    const forward=study.questionPresentation(word,"fr-zh");
    const reverse=study.questionPresentation(word,"zh-fr");
    assert.equal(forward.prompt,word.french);
    assert.equal(forward.answer,word.meaning);
    assert.equal(forward.canPlayWord,true);
    assert.equal(reverse.prompt,word.meaning);
    assert.equal(reverse.answer,word.french);
    assert.equal(reverse.canPlayWord,false);
    assert.deepEqual(study.questionPresentation(word,"zh-fr",true),forward,"First encounters remain French introductions");
  }
  // Optional reference from the previously published code, outside this checkout.
  if (process.argv[2]) {
    const baseline = require(resolve(process.argv[2])).words;
    assert.equal(baseline.length, 1000);
    assert.deepEqual(words.slice(0, 1000), baseline, "Published vocabulary and example data must stay unchanged");
  }
  assert.equal(wordById["fr-2100"].french, "un courriel / un e-mail");
  console.log("PASS: 2,100 entries; 2,000 core + 100 extension; 4,200 bilingual examples; 6,300 option sets; stable IDs; all learned words reviewable; mastery exclusion; rounds.");
} finally { rmSync(output, { recursive: true, force: true }); }

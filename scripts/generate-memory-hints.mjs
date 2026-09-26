import { readFileSync, writeFileSync } from 'node:fs';
import assert from 'node:assert/strict';
const root = new URL('../', import.meta.url);
const rows = readFileSync(new URL('data/memory-hints.tsv', root), 'utf8').trim().split('\n');
assert.equal(rows.length, 2100, 'Every word needs a stable editorial row');
const origins = JSON.parse(readFileSync(new URL('data/word-origins.json', root), 'utf8'));
const deferred = JSON.parse(readFileSync(new URL('data/memory-hint-gaps.json', root), 'utf8'));
const phonetics = /发音|读音|音节|元音|辅音|鼻化|圆唇|音标|合读|连读|读成|读作|读为|不发音|[\/][^\s\/]+[\/]|[\u0250-\u02af]/u;
const hints = {};
for (const [index, row] of rows.entries()) {
  const [number, raw, ...extra] = row.split('\t');
  assert.equal(Number(number), index + 1, 'Keep stable vocabulary order');
  assert.equal(extra.length, 0);
  assert.ok(raw?.trim());
  const id = `fr-${number.padStart(3, '0')}`;
  if (raw === '-') {
    assert.ok(deferred[id]?.trim(), `Unexplained missing cue: ${id}`);
    hints[id] = null;
    continue;
  }
  assert.ok(!deferred[id], `Remove obsolete gap record: ${id}`);
  assert.ok(!/[\u0530-\u058f\uFFFD]/u.test(raw), 'Unexpected characters');
  assert.ok(!raw.startsWith('P:'), 'Collocation cues are no longer used');
  assert.ok(!/想象|画面|词族|同一组/u.test(raw), `Rewrite scene-only or word-family-list cue ${number}; see docs/memory-hint-guidelines.md`);
  assert.ok(!phonetics.test(raw), `Pronunciation is not a memory cue: ${id}`);
  assert.ok(!/含义锚点|固定意思|固定含义|对应 (?:management|kitchen sink)|E:crèche/u.test(raw), `Translation-only cue: ${id}`);
  const kind = raw.startsWith('E:') ? 'english' : 'association';
  hints[id] = { kind, text: kind === 'association' ? raw : raw.slice(2) };
}
for (const id of Object.keys(deferred)) assert.equal(hints[id], null, `Unknown or nonempty gap: ${id}`);
for (const [id, origin] of Object.entries(origins)) {
  assert.ok(hints[id], `Unknown origin word: ${id}`);
  assert.ok(origin.text?.trim() && origin.sources?.length);
  assert.ok(!/想象|画面/u.test(origin.text), `Keep sourced history separate from invented imagery: ${id}`);
  for (const source of origin.sources) {
    assert.ok(source.label?.trim());
    assert.equal(new URL(source.url).protocol, 'https:');
  }
  hints[id].origin = origin;
}
writeFileSync(new URL('lib/memory-hints.ts', root), `// Generated from reviewed cues and sourced word histories.\n// Null means no approved mnemonic; never replace it with pronunciation or a translation.\nexport type MemoryHint = { kind: "english" | "association"; text: string; origin?: { text: string; sources: { label: string; url: string }[] } };\nexport const memoryHints: Record<string, MemoryHint | null> = ${JSON.stringify(hints, null, 2)};\n`);
console.log(`Generated ${rows.length - Object.keys(deferred).length} memory hints; ${Object.keys(deferred).length} explicitly deferred.`);

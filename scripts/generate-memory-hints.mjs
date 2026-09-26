import { readFileSync, writeFileSync } from 'node:fs';
import assert from 'node:assert/strict';
const root = new URL('../', import.meta.url);
const rows = readFileSync(new URL('data/memory-hints.tsv', root), 'utf8').trim().split('\n');
assert.equal(rows.length, 2100, 'Every word needs a stable editorial row');
const origins = JSON.parse(readFileSync(new URL('data/word-origins.json', root), 'utf8'));
const phonetics = /发音|读音|音节|元音|辅音|鼻化|圆唇|音标|合读|连读|读成|读作|读为|不发音|要读|另读|[\/][^\s\/]+[\/]|[\u0250-\u02af]/u;
const hints = {};
for (const [index, row] of rows.entries()) {
  const [number, raw, ...extra] = row.split('\t');
  assert.equal(Number(number), index + 1, 'Keep stable vocabulary order');
  assert.equal(extra.length, 0);
  assert.ok(raw?.trim());
  const id = `fr-${number.padStart(3, '0')}`;
  assert.notEqual(raw, '-', `Every word must have a memory cue: ${id}`);
  assert.ok(!/[\u0530-\u058f\uFFFD]/u.test(raw), 'Unexpected characters');
  assert.ok(!raw.startsWith('P:'), 'Collocation cues are no longer used');
  assert.ok(!phonetics.test(raw), `Pronunciation is not a memory cue: ${id}`);
  assert.ok(!/含义锚点|固定意思|固定含义|对应 (?:management|kitchen sink)|E:crèche/u.test(raw), `Translation-only cue: ${id}`);
  const kind = raw.startsWith('F:') ? 'playful' : raw.startsWith('E:') ? 'english' : 'association';
  hints[id] = { kind, text: kind === 'association' ? raw : raw.slice(2) };
}
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
writeFileSync(new URL('lib/memory-hints.ts', root), `// Generated from data/memory-hints.tsv and sourced word histories.\n// Playful cues are invented memory aids, not claims about word origins.\nexport type MemoryHint = { kind: "english" | "association" | "playful"; text: string; origin?: { text: string; sources: { label: string; url: string }[] } };\nexport const memoryHints: Record<string, MemoryHint> = ${JSON.stringify(hints, null, 2)};\n`);
console.log(`Generated ${rows.length} memory hints; ${Object.values(hints).filter(h => h.kind === 'playful').length} playful associations; no missing cues.`);

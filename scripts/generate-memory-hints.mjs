import { readFileSync, writeFileSync } from 'node:fs';
import assert from 'node:assert/strict';
const root = new URL('../', import.meta.url);
const rows = readFileSync(new URL('data/memory-hints.tsv', root), 'utf8').trim().split('\n');
assert.equal(rows.length, 2100, 'Every word needs an authored memory hint');
const origins = JSON.parse(readFileSync(new URL('data/word-origins.json', root), 'utf8'));
const hints = {};
for (const [index, row] of rows.entries()) {
  const [number, raw, ...extra] = row.split('\t');
  assert.equal(Number(number), index + 1, 'Keep stable vocabulary order');
  assert.equal(extra.length, 0);
  assert.ok(raw?.trim());
  assert.ok(!/[\u0530-\u058f\uFFFD]/u.test(raw), 'Unexpected characters');
  assert.ok(!raw.startsWith('P:'), 'Collocation cues are no longer used');
  const kind = raw.startsWith('E:') ? 'english' : 'association';
  hints[`fr-${number.padStart(3, '0')}`] = { kind, text: kind === 'association' ? raw : raw.slice(2) };
}
for (const [id, origin] of Object.entries(origins)) {
  assert.ok(hints[id], `Unknown origin word: ${id}`);
  assert.ok(origin.text?.trim() && origin.sources?.length);
  for (const source of origin.sources) {
    assert.ok(source.label?.trim());
    assert.equal(new URL(source.url).protocol, 'https:');
  }
  hints[id].origin = origin;
}
writeFileSync(new URL('lib/memory-hints.ts', root), `// Generated from data/memory-hints.tsv and sourced data/word-origins.json.\n// Associations are learning aids, not claims of shared etymology or pronunciation.\nexport type MemoryHint = { kind: "english" | "association"; text: string; origin?: { text: string; sources: { label: string; url: string }[] } };\nexport const memoryHints: Record<string, MemoryHint> = ${JSON.stringify(hints, null, 2)};\n`);
console.log(`Generated ${rows.length} authored memory hints.`);

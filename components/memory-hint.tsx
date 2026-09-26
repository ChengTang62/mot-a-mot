import type { Word } from "@/lib/words";

const labels = { english: "英语关联", association: "记忆点", playful: "趣味联想" };

export function MemoryHint({ word }: { word: Word }) {
  // Playful mnemonics and sourced word histories have separate labels.
  const hint = word.memoryHint;
  if (!hint) return null;
  return <div className="memory-hint" aria-label={`${word.french} 的记忆点`}>
    <span className="memory-hint-label">{labels[hint.kind]}</span>
    <div className="memory-hint-text" lang="zh-CN">{hint.text}</div>
    {hint.origin && <div className="word-origin" lang="zh-CN">
      <span className="memory-hint-label">词源小故事</span>
      <div className="memory-hint-text">{hint.origin.text}</div>
      <div className="origin-sources">{hint.origin.sources.map((source, index) =>
        <a key={source.url} href={source.url} target="_blank" rel="noopener noreferrer">{source.label}{hint.origin!.sources.length > 1 ? ` · ${index + 1}` : ""} ↗</a>
      )}</div>
    </div>}
  </div>;
}

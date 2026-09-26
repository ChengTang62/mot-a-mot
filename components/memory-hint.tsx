import type { Word } from "@/lib/words";

const labels = { english: "英语关联", association: "记忆点" };

export function MemoryHint({ word }: { word: Word }) {
  return <div className="memory-hint" aria-label={`${word.french} 的记忆点`}>
    <span className="memory-hint-label">{labels[word.memoryHint.kind]}</span>
    <div className="memory-hint-text" lang="zh-CN">{word.memoryHint.text}</div>
    {word.memoryHint.origin && <div className="word-origin" lang="zh-CN">
      <span className="memory-hint-label">词源小故事</span>
      <div className="memory-hint-text">{word.memoryHint.origin.text}</div>
      <div className="origin-sources">{word.memoryHint.origin.sources.map((source, index) =>
        <a key={source.url} href={source.url} target="_blank" rel="noopener noreferrer">{source.label}{word.memoryHint.origin!.sources.length > 1 ? ` · ${index + 1}` : ""} ↗</a>
      )}</div>
    </div>}
  </div>;
}

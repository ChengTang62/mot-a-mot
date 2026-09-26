"use client";
import { Snail, Volume2 } from "lucide-react";
import type { Word } from "@/lib/words";
import { MemoryHint } from "@/components/memory-hint";

type Props = {
  word: Word;
  speak: (text: string, slow?: boolean) => void;
  activeSpeech: { text: string; slow: boolean } | null;
  compact?: boolean;
};

export function ExampleSentences({ word, speak, activeSpeech, compact = false }: Props) {
  return <section className={`sentence-examples ${compact ? "compact" : ""}`} aria-label={`${word.french} 的例句`}>
    <MemoryHint word={word}/>
    <div className="sentence-heading">简单例句 <span>点读整句</span></div>
    <ol className="sentence-list">
      {word.examples.map((example, index) => <li className="sentence-item" key={`${word.id}-${index}`}>
        <p className="sentence-french" lang="fr">{example.french}</p>
        <p className="sentence-translation" lang="zh-CN">{example.translation}</p>
        <div className="sentence-controls">
          {[false, true].map(slow => {
            const active = activeSpeech?.text === example.french && activeSpeech.slow === slow;
            return <button key={String(slow)} type="button" className={`sentence-audio ${active ? "playing" : ""}`}
              aria-label={`${slow ? "慢速朗读" : "朗读"}例句：${example.french}`}
              onClick={() => speak(example.french, slow)}>
              {slow ? <Snail size={15} aria-hidden="true" /> : <Volume2 size={15} aria-hidden="true" />}
              {active ? "播放中" : slow ? "慢速" : "朗读"}
            </button>;
          })}
        </div>
      </li>)}
    </ol>
  </section>;
}

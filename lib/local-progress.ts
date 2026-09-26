import { projectAction, type ProgressMap, type StudyAction } from "./study";
import { wordById } from "./words";
export const STORAGE_KEY = "mot-a-mot-progress-v1";
type Snapshot = { version: 1; progress: ProgressMap; events: Record<string, true> };
function readSnapshot(): Snapshot {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw === null) return { version: 1, progress: {}, events: {} };
  const data = JSON.parse(raw) as Snapshot;
  if (data.version !== 1 || !data.progress || !data.events || Array.isArray(data.progress)) throw new Error("Unsupported progress data");
  for (const [id, row] of Object.entries(data.progress)) {
    if (!Object.hasOwn(wordById, id) || row.word_id !== id || ![row.seen, row.correct, row.mistakes, row.streak, row.due, row.last_seen, row.mastered, row.reviewed_at ?? 0].every(n => typeof n === "number" && Number.isFinite(n) && n >= 0)) throw new Error("Invalid progress data");
  }
  return data;
}
export async function loadLocalProgress() { return { progress: readSnapshot().progress }; }
export async function saveLocalAction(action: StudyAction) {
  if (!navigator.locks) throw new Error("Use a modern browser on HTTPS or localhost");
  if (!Object.hasOwn(wordById, action.wordId) || !/^[\da-f-]{36}$/i.test(action.eventId) || !["answer", "introduce", "master", "restore", "hint"].includes(action.action) || (action.selectedId !== null && !Object.hasOwn(wordById, action.selectedId))) throw new Error("Invalid action");
  // Serialize writers across tabs; always read the latest snapshot inside the lock.
  return navigator.locks.request(STORAGE_KEY, () => {
    const data = readSnapshot();
    if (!Object.hasOwn(data.events, action.eventId)) {
      if (!data.progress[action.wordId]?.mastered || action.action === "restore" || action.action === "master") data.progress = projectAction(data.progress, action);
      data.events[action.eventId] = true;
      // Commit progress and idempotency marker together; storage errors propagate.
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }
    return { progress: data.progress };
  });
}

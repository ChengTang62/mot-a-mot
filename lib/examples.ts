import { basicExamples } from "./examples-basic";
import { advancedExamples } from "./examples-advanced";
import { expandedExamples } from "./examples-expanded";

export type Example = { french: string; translation: string };

// Basic words already have one original example; their rows add a second.
// All other rows supply two examples. Keys never affect vocabulary IDs or order.
export const examplesByFrench: Record<string, Example[]> = Object.fromEntries(
  [basicExamples, advancedExamples, expandedExamples].flatMap(block =>
    block.split("\n").map(line => {
      const [word, ...fields] = line.split("|");
      const examples: Example[] = [];
      for (let i = 0; i < fields.length; i += 2) {
        examples.push({ french: fields[i], translation: fields[i + 1] });
      }
      return [word, examples];
    })
  )
);

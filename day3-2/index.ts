import { zip } from "radash";

const file = await Bun.file("input.txt").text();

const mulRegex = /(?:mul\((\d{1,3}),(\d{1,3})\)|(?:don't|do)\(\))/g;

const operations = [...file.matchAll(mulRegex)].map((match) => {
  return { op: match[0], nbs: [parseInt(match[1]), parseInt(match[2])] };
});

console.log(operations);

const result = operations.reduce(
  (acc, { op, nbs }) => {
    if (op === "don't()") {
      return { continue: false, sum: acc.sum };
    } else if (op === "do()") {
      return { continue: true, sum: acc.sum };
    }

    if (!acc.continue) return acc;

    const result = {
      continue: true,
      sum: acc.sum + nbs[0] * nbs[1],
    };

    return result;
  },
  { continue: true, sum: 0 }
);

console.log(result);

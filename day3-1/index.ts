import { zip } from "radash";

const file = await Bun.file("input.txt").text();

const mulRegex = /mul\((\d{1,3}),(\d{1,3})\)/g;
const operations = [...file.matchAll(mulRegex)].map((match) => [
  parseInt(match[1]),
  parseInt(match[2]),
]);

console.log(operations);

const result = operations.reduce((acc, [a, b]) => acc + a * b, 0);

console.log(result);

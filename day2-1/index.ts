import { zip } from "radash";

const file = await Bun.file("input.txt").text();

const input = file.split("\n").map((line) => line.split(" ").map(Number));

const control = input.map((level) => {
  const [, ...shifted] = level;
  const zipped = zip(level, shifted).filter(([a, b]) => a && b);
  const isIncreasing = zipped.every(([a, b]) => a < b);
  const isDecreasing = zipped.every(([a, b]) => a > b);
  const diffs = zipped.map(([a, b]) => Math.abs(a - b));
  const isLimited = diffs.every((diff) => diff > 0 && diff <= 3);
  return (isIncreasing || isDecreasing) && isLimited;
});

console.log(control);
console.log(control.filter(Boolean).length);

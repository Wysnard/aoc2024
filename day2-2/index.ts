import { zip } from "radash";

const file = await Bun.file("input.txt").text();

const input = file.split("\n").map((line) => line.split(" ").map(Number));

const control = (level: number[]) => {
  const [, ...shifted] = level;
  const zipped = zip(level, shifted).filter(([a, b]) => a && b);
  const isIncreasing = zipped.every(([a, b]) => a < b);
  const isDecreasing = zipped.every(([a, b]) => a > b);
  const diffs = zipped.map(([a, b]) => Math.abs(a - b));
  const isLimited = diffs.every((diff) => diff > 0 && diff <= 3);
  return (isIncreasing || isDecreasing) && isLimited;
};

const controled = input.map((level) => {
  const generatedLevels = [
    level,
    ...level.map((_, i) => level.toSpliced(i, 1)),
  ];
  return generatedLevels.map(control).some(Boolean);
});

console.log(controled);
console.log(controled.filter(Boolean).length);

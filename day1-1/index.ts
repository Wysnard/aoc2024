import { sum, zip } from "radash";

const input = await Bun.file("input.txt").text();

const nbs = input.split("\n").map((line) => line.split("   ").map(Number));

const transpose = (arr: number[][]) =>
  arr[0].map((_, colIndex) => arr.map((row) => row[colIndex]));

const [left, right] = transpose(nbs);
console.log(left, right);

const sortedLeft = left.sort((a, b) => a - b);
const sortedRight = right.sort((a, b) => a - b);

console.log(sortedLeft, sortedRight);

const zipped = zip(sortedLeft, sortedRight);

console.log(zipped);

const diffs = zipped.map(([a, b]) => Math.abs(a - b));

console.log(diffs);

console.log(sum(diffs));

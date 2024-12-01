import { sum, zip } from "radash";

const input = await Bun.file("input.txt").text();

const nbs = input.split("\n").map((line) => line.split("   ").map(Number));

const transpose = (arr: number[][]) =>
  arr[0].map((_, colIndex) => arr.map((row) => row[colIndex]));

const [left, right] = transpose(nbs);
console.log(left, right);

const similarities = left.map((a) => right.filter((b) => a === b).length * a);

console.log(similarities);

console.log(sum(similarities));

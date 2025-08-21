import { sort } from "./sort";

const MOCKED_DATA = [
  { width: 10, height: 10, length: 10, mass: 5 }, // this should be ouput as STANDARD
  { width: 151, height: 10, length: 10, mass: 5 }, // this should be output as SPECIAL (bulky)
  { width: 10, height: 10, length: 10, mass: 20 }, // SPECIAL (heavy)
  { width: 151, height: 10, length: 10, mass: 20 }, // REJECTED (bulky & heavy)
  { width: 100, height: 100, length: 100, mass: 5 }, // SPECIAL (bulky by volume)
  { width: 100, height: 100, length: 100, mass: 20 }, // REJECTED (bulky & heavy)
];

MOCKED_DATA.forEach(({ width, height, length, mass }, i) => {
  const result = sort(width, height, length, mass);

  console.log(
    `Sample ${i + 1}:`,
    { width, height, length, mass },
    "=>",
    result
  );
});

// Link: https://www.codewars.com/kata/58845a92bd573378f4000035/javascript

/*

You're given an arbitrary 32-bit integer n. Swap each pair of adjacent bits
in its binary representation and return the result as a decimal number.

Example

For n = 13, the output should be 14

    13 = 1101 ~> 1110 = 14

For n = 74, the output should be 133

    74 = 01001010 ~> 10000101 = 133

Note

The preceding zero written in front of the initial number: since both numbers
are 32-bit integers, they have 32 bits in their binary representation. The
preceding zeros in other cases don't matter, so they are omitted. Here, however,
it does make a difference.

Input/Output

[input] integer n

    0 ≤ n < 2^30.

[output] an integer

*/

const swapAdjacentBits = (n) => {
  const binary = n.toString(2);
  return parseInt(
    ("0".repeat(binary.length % 2) + binary)
      .split(/(\d{2})/g)
      .map((p) => [...p].reverse().join(""))
      .join(""),
    2
  );
};

console.log(swapAdjacentBits(13)); // 14
console.log(swapAdjacentBits(74)); // 133
console.log(swapAdjacentBits(1073741823)); // 1073741823
console.log(swapAdjacentBits(0)); // 0
console.log(swapAdjacentBits(1)); // 2
console.log(swapAdjacentBits(83748)); // 166680

/* Top 3 solutions: (sorted by best practices)

===

function swapAdjacentBits(n) {
  return (n & 0xAAAAAAAA) >> 1 | (n & 0x55555555) << 1
}

===

const swapAdjacentBits = (n) =>
  parseInt(
    n
      .toString(2)
      .padStart(32, `0`)
      .replace(/../g, (x) => x.split("").reverse().join("")),
    2
  );

===

const swapAdjacentBits = (n) =>
  parseInt(
    n
      .toString(2)
      .padStart(32, `0`)
      .replace(/(.)(.)/g, `$2$1`),
    2
  );

*/

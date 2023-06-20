// Link: https://www.codewars.com/kata/58845748bd5733f1b300001f/javascript

/*

You are given two numbers a and b where 0 ≤ a ≤ b. Imagine you construct an
array of all the integers from a to b inclusive. You need to count the number
of 1s in the binary representations of all the numbers in the array.

Example

For a = 2 and b = 7, the output should be 11

Given a = 2 and b = 7 the array is: [2, 3, 4, 5, 6, 7]. Converting the numbers
to binary, we get [10, 11, 100, 101, 110, 111], which contains
1 + 2 + 1 + 2 + 2 + 3 = 11 1s.

Input/Output

[input] integer a

    Constraints: 0 ≤ a ≤ b.

[input] integer b

    Constraints: a ≤ b ≤ 100.

[output] an integer

*/

const rangeBitCount = (a, b) =>
  Array.from(Array(b - a + 1))
    .map((_, i) => (i === 0 ? a : a + i).toString(2))
    .reduce(
      (acc, curr) => acc + curr.split("").reduce((ac, cu) => ac + +cu, 0),
      0
    );

console.log(rangeBitCount(2, 7)); // 11
console.log(rangeBitCount(0, 1)); // 1
console.log(rangeBitCount(4, 4)); // 1

/* Top 3 solutions: (sorted by best practices)

===

function rangeBitCount(a, b) {
  let sum = 0;
  
  for (let i = a; i <= b; i++) sum += i.toString(2).split("1").length - 1;

  return sum;
}

===

function rangeBitCount(a, b) {
  var c = 0;
  while (a <= b) {
    c += (a & 1) != 0;
    c += (a & 2) != 0;
    c += (a & 4) != 0;
    c += (a & 8) != 0;
    c += (a & 16) != 0;
    c += (a & 32) != 0;
    c += (a & 64) != 0;
    ++a;
  }
  return c;
}

===

const rangeBitCount = (a, b) =>
  [...Array(b - a + 1)].reduce(
    (pre, _, idx) => pre + (idx + a).toString(2).replace(/0/g, ``).length,
    0
  );

*/

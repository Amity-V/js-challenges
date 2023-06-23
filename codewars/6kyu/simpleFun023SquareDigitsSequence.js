// Link: https://www.codewars.com/kata/5886d65e427c27afeb0000c1/javascript

/*

Consider a sequence of numbers a0, a1, ..., an, in which an element is equal to
the sum of squared digits of the previous element. The sequence ends once an element
that has already been in the sequence appears again.

Given the first element a0, find the length of the sequence.

Example

For a0 = 16, the output should be 9

Here's how elements of the sequence are constructed:

a0 = 16

a1 = 1*1 + 6*6 = 37

a2 = 3*3 + 7*7 = 58

a3 = 5*5 + 8*8 = 89

a4 = 8*8 + 9*9 = 145

a5 = 1*1 + 4*4 + 5*5 = 42

a6 = 4*4 + 2*2 = 20

a7 = 2*2 + 0*0 = 4

a8 = 4*4 = 16, which has already occurred before (a0)

Thus, there are 9 elements in the sequence.

For a0 = 103, the output should be 4

The sequence goes as follows: 103 -> 10 -> 1 -> 1, 4 elements altogether.

Input/Output

[input] integer a0

    First element of a sequence, positive integer.
    Constraints: 1 ≤ a0 ≤ 650.

[output] an integer

*/

const squareDigitsSequence = (a0) => {
  const sequences = [null];
  let current = a0;

  while (sequences.indexOf(a0) === -1) {
    current = `${current}`
      .split("")
      .reduce((acc, curr) => acc + Number(curr) ** 2, 0);

    if (sequences.indexOf(current) > -1) {
      sequences.push(current);
      break;
    }

    sequences.push(current);
  }

  return sequences.length;
};

console.log(squareDigitsSequence(16)); // 9
console.log(squareDigitsSequence(103)); // 4
console.log(squareDigitsSequence(1)); // 2
console.log(squareDigitsSequence(374)); // 13

/* Top 3 solutions: (sorted by best practices)

===

function squareDigitsSequence(n) {
  var s = new Set();
  while (!s.has(n)) {
    s.add(n);
    n = +[...("" + n)].reduce((n, d) => n + d * d, 0);
  }
  return s.size + 1;
}

===

function squareDigitsSequence(n) {
  var res = [];
  do {
    res.push(n);
    n = ("" + n)
      .split("")
      .map((n) => n * n)
      .reduce((a, b) => a + b);
  } while (res.indexOf(n) === -1);
  return res.length + 1;
}

===

const squareDigitsSequence = (a0, seq = []) => (
  seq.push(a0),
  (a0 = [...`${a0}`].reduce((pre, val) => pre + val ** 2, 0)),
  seq.includes(a0) ? ++seq.length : squareDigitsSequence(a0, seq)
);

*/

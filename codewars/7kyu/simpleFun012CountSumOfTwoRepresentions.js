// Link: https://www.codewars.com/kata/5884615cbd573356ab000050/javascript

/*

Given integers n, l and r, find the number of ways to represent n as a sum
of two integers A and B such that l ≤ A ≤ B ≤ r.

Example

    For n = 6, l = 2 and r = 4, the output should be 2
    There are just two ways to write 6 as A + B, where 2 ≤ A ≤ B ≤ 4:
    6 = 2 + 4 and 6 = 3 + 3

Input/Output

[input] integer n

    A positive integer.
    Constraints: 5 ≤ n ≤ 106.

[input] integer l

    A positive integer.
    Constraints: 1 ≤ l ≤ r.

[input] integer r

    A positive integer.
    Constraints: l ≤ r ≤ 106

[output] an integer

*/

const countSumOfTwoRepresentations = (n, l, r) => {
  let ways = 0;

  for (let i = l; i <= r; i += 1) {
    if (i + r >= n) {
      for (let j = i; j <= r; j += 1) {
        if (i + j === n) {
          let a = i;
          let b = j;

          while (a + b === n && a <= b) {
            ways += 1;
            a += 1;
            b -= 1;
          }

          i += r;
          j += r;
        }
      }
    }
  }

  return ways;
};

console.log(countSumOfTwoRepresentations(6, 2, 4)); // 2
console.log(countSumOfTwoRepresentations(6, 3, 3)); // 1
console.log(countSumOfTwoRepresentations(10, 9, 11)); // 0
console.log(countSumOfTwoRepresentations(24, 8, 16)); // 5
console.log(countSumOfTwoRepresentations(24, 12, 12)); // 1
console.log(countSumOfTwoRepresentations(93, 24, 58)); // 12

/* Top 3 solutions: (sorted by best practices)

===

const countSumOfTwoRepresentations = (n, l, r) =>
  Math.max((Math.min(r, n - l) - Math.max(l, n - r)) / 2 + 1 ^ 0, 0);

===

function countSumOfTwoRepresentations(n, l, r) {
  return Math.max(0, Math.ceil((Math.min(r, n - l) - Math.max(l, n - r) + 1) / 2));
}

===

function countSumOfTwoRepresentations(n, l, r) {
  let res = 0;
  for (let a = l; a <= r; a++) {
    let b = n - a;
    if (b >= l && b <= r && b >= a) {
      res++;
    }
  }
  return res;
}

*/

// Link: https://www.codewars.com/kata/5886cab0a95e17e61600009d/javascript

/*

Let's call two integers A and B friends if each integer from the array divisors
is either a divisor of both A and B or neither A nor B. If two integers are friends,
they are said to be in the same clan. How many clans are the integers from 1 to k,
inclusive, broken into?

Example

For divisors = [2, 3] and k = 6, the output should be 4

The numbers 1 and 5 are friends and form a clan, 2 and 4 are friends and form a clan,
and 3 and 6 do not have friends and each is a clan by itself. So the numbers 1 through
6 are broken into 4 clans.

Input/Output

[input] integer array divisors

    A non-empty array of positive integers.
    Constraints: 2 ≤ divisors.length < 10, 1 ≤ divisors[i] ≤ 10.

[input] integer k

    A positive integer.
    Constraints: 5 ≤ k ≤ 50.

[output] an integer

*/

const numberOfClans = (divisors, k) => {
  const groups = new Set();

  for (let i = 1; i <= k; i += 1) {
    let group = "";

    for (let divisor of divisors) {
      group += `${!!(i % +divisor)}`;
    }

    groups.add(group);
  }

  return groups.size;
};

console.log(numberOfClans([2, 3], 6)); // 4
console.log(numberOfClans([2, 3, 4], 6)); // 5
console.log(numberOfClans([1, 3], 10)); // 2
console.log(numberOfClans([6, 2, 2, 8, 9, 2, 2, 2, 2], 10)); // 5

/* Top 3 solutions: (sorted by best practices)

===

const numberOfClans = (divisors, k) =>
  new Set(
    [...Array(k)].map(
      (_, idx) => `${divisors.map((val) => !((idx + 1) % val))}`
    )
  ).size;

===

function numberOfClans(divisors, k) {
  let isDivisible = [];
  for (let i = 1; i <= k; i++) {
    isDivisible.push(divisors.map((el) => (i % el === 0 ? 1 : 0)).join(""));
  }
  return new Set([...isDivisible]).size;
}

===

function numberOfClans(divisors, k) {
  const clans = new Set();
  for (let i = 1; i <= k; ++i)
    clans.add(divisors.map((d) => +(i % d == 0)).join(""));
  return clans.size;
}

*/

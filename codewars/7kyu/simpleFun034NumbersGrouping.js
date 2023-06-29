// Link: https://www.codewars.com/kata/588711735ea0b4649e000001/javascript

/*

You are given an array of integers that you want distribute between several
groups. The first group should contain numbers from 1 to 10(4), the second should
contain those from 10(4) + 1 to 2 x 10(4), ..., the 100th one should contain numbers
from 99 x 10(4) + 1 to 10(6) and so on.

All the numbers will then be written down in groups to the text file in such a
way that:

    the groups go one after another;
    each non-empty group has a header which occupies one line;
    each number in a group occupies one line.

Calculate how many lines the resulting text file will have.

Example

For a = [20000, 239, 10001, 999999, 10000, 20566, 29999],

the output should be 11.

The numbers can be divided into 4 groups:

239 and 10000 go to the 1st group (1 ... 10(4));

10001 and 20000 go to the second 2nd (10(4) + 1 ... 2 x 10(4));

20566 and 29999 go to the 3rd group (2 x 10(4) + 1 ... 3 x 10(4));

groups from 4 to 99 are empty;

999999 goes to the 100th group (99 * 10(4) + 1 ... 10(6)).

Thus, there will be 4 groups (i.e. four headers) and 7 numbers,

so the file will occupy 4 + 7 = 11 lines.

The file like this:

    1-10000:
    239
    10000
    10001-20000:
    10001
    20000
    20001-30000:
    20566
    29999
    990001-1000000:
    999999

Input/Output

[input] integer array a

    Constraints: 1 ≤ a.length ≤ 10(4), 1 ≤ a[i] ≤ 10(6).

[output] an integer

The number of lines needed to store the grouped numbers.

*/

const numbersGrouping = (a, groupMap = new Map()) => {
  a.sort((a, b) => a - b);

  for (let i = 1; i <= 100; i += 1) {
    const exp = i * 10 ** 4;

    while (a[0] <= exp) {
      const group = groupMap.get(exp);
      group ? groupMap.set(exp, group + 1) : groupMap.set(exp, 1);
      a.shift();
    }

    if (a.length === 0) break;
  }

  return groupMap.size + [...groupMap].reduce((acc, [_, q]) => acc + q, 0);
};

console.log(numbersGrouping([20000, 239, 10001, 999999, 10000, 20566, 29999])); // 11
console.log(
  numbersGrouping([
    10000, 20000, 30000, 40000, 50000, 60000, 10000, 120000, 150000, 200000,
    300000, 1000000,
  ])
); // 23
console.log(numbersGrouping([10000])); // 2
console.log(numbersGrouping([10000, 1])); // 3

/* Top 3 solutions: (sorted by best practices)

===

const numbersGrouping = (a) =>
  new Set(a.map((val) => (--val / 1e4) ^ 0)).size + a.length;

===

function numbersGrouping(a) {
  return new Set(a.map((n) => Math.ceil(n / 10000))).size + a.length;
}

===

let numbersGrouping = a => (a = a.map(i => ~~(--i/1e4))).length + new Set(a).size

*/

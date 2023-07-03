// Link: https://www.codewars.com/kata/588809279ab1e0e17700002e/javascript

/*

A step(x) operation works like this: it changes a number x into x - s(x),
where s(x) is the sum of x's digits. You like applying functions to numbers,
so given the number n, you decide to build a decreasing sequence of numbers:
n, step(n), step(step(n)), etc., with 0 as the last element.

Building a single sequence isn't enough for you, so you replace all elements
of the sequence with the sums of their digits (s(x)). Now you're curious as
to which number appears in the new sequence most often. If there are several
answers, return the maximal one.

Example

For n = 88, the output should be 9.

Here is the first sequence you built: 88, 72, 63, 54, 45, 36, 27, 18, 9, 0;

And here is s(x) for each of its elements: 16, 9, 9, 9, 9, 9, 9, 9, 9, 0.

As you can see, the most frequent number in the second sequence is 9.

For n = 8, the output should be 8.

At first you built the following sequence: 8, 0

s(x) for each of its elements is: 8, 0

As you can see, the answer is 8 (it appears as often as 0, but is greater than it).

Input/Output

[input] integer n

    Constraints: 1 ≤ n ≤ 10(5)

[output] an integer

    The most frequent number in the sequence s(n), s(step(n)), s(step(step(n))), etc.

*/

const mostFrequentDigitSum = (n, sumsMap = new Map()) => {
  if (n < 10) return n;

  while (n > 0) {
    const step = n - [...`${n}`].reduce((acc, curr) => acc + +curr, 0);
    const sum = [...`${step}`].reduce((acc, curr) => acc + +curr, 0);

    sumsMap.set(sum, sumsMap.has(sum) ? sumsMap.get(sum) + 1 : 1);

    n = step;
  }

  return [...sumsMap].sort((a, b) => b[1] - a[1])[0][0];
};

console.log(mostFrequentDigitSum(88)); // 9
console.log(mostFrequentDigitSum(8)); // 8
console.log(mostFrequentDigitSum(1)); // 1
console.log(mostFrequentDigitSum(17)); // 9
console.log(mostFrequentDigitSum(239)); // 9
console.log(mostFrequentDigitSum(994)); // 9
console.log(mostFrequentDigitSum(99999)); // 18

/* Top 3 solutions: (sorted by best practices)

===

const mostFrequentDigitSum = (n) => {
  const sum = (val) => [...`${val}`].reduce((pre, val) => pre + +val, 0);
  const obj = {};
  for (let i = n; i > 0; i -= sum(i)) obj[sum(i)] = -~obj[sum(i)];
  return +Object.keys(obj).reduce((pre, val) =>
    obj[pre] > obj[val] ? pre : val
  );
};

===

function mostFrequentDigitSum(n) {
  let summs = {},
    s = 0;
  while (n > 0) {
    s = [...(n + "")].reduce((a, b) => a + +b, 0);
    summs[s] = ++summs[s] || 1;
    n -= s;
  }
  return +Object.entries(summs).sort(
    (a, b) => b[1] - a[1] || b[0] - a[0]
  )[0][0];
}

===

function mostFrequentDigitSum(n) {
  let f = {};
  while (n > 0) {
    let sn = n
      .toString()
      .split("")
      .reduce((acc, v) => acc + +v, 0);
    f[sn] = f[sn] ? f[sn] + 1 : 1;
    n -= sn;
  }
  return +Object.keys(f)
    .sort((a, b) => f[a] - f[b])
    .pop();
}

*/

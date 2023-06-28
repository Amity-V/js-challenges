// Link: https://www.codewars.com/kata/58870c87c81516bbdb0000d8/javascript

/*

Given a string consisting of lowercase English letters, find the largest square
number which can be obtained by reordering its characters and replacing them with
digits (leading zeros are not allowed) where same characters always map to the same
digits and different characters always map to different digits.

If there is no solution, return -1

Examples

    "ab"  -->  81
    "zzz" -->  -1  // There are no 3-digit square numbers with identical digits
    "aba" --> 900  // It can be obtained after reordering the initial string into "baa"

Input/Output

[input] string s

    Constraints: 2 ≤ s.length < 10.

[output] an integer

*/

const constructSquare = (s) => {
  const getQuantity = (value) =>
    Array.from(
      `${value}`.split("").reduce((acc, curr) => {
        acc.has(curr) ? acc.set(curr, acc.get(curr) + 1) : acc.set(curr, 1);
        return acc;
      }, new Map()),
      ([_, q]) => q
    )
      .sort()
      .join("");

  const qS = getQuantity(s);
  const squares = [];
  const max = Number("9".repeat(s.length));

  for (let i = 4; i * i <= max; i += 1) {
    if (`${i * i}`.length < s.length) continue;

    squares.push([getQuantity(i * i), i * i]);
  }

  return (
    squares.reverse().find(([str, num]) => {
      if (str === qS) {
        return num;
      }
    })?.[1] || -1
  );
};

console.log(constructSquare("ab")); // 81
console.log(constructSquare("zzz")); // -1
console.log(constructSquare("aba")); // 900
console.log(constructSquare("abcbbb")); // 810000
console.log(constructSquare("abc")); // 961
console.log(constructSquare("aaaabbcde")); // 999950884

/* Top 3 solutions: (sorted by best practices)

===

const constructSquare = (s) => {
  const fn = (val) =>
    Object.values(
      [...val].reduce((pre, val) => ((pre[val] = -~pre[val]), pre), {})
    )
      .sort()
      .join(``);
  for (let i = ((10 ** s.length) ** 0.5) ^ 0; i > 2; i--) {
    if (`${i ** 2}`.length === s.length && fn(`${i ** 2}`) === fn(s))
      return i ** 2;
  }
  return -1;
};

===

function constructSquare(s) {
  const max = Math.floor(Math.sqrt(Number("9".repeat(s.length))));
  const min = Math.floor(Math.sqrt(Number("1" + "0".repeat(s.length - 1))));
  const sRepeats = repeatsCount(s);

  for (let j = max; j >= min; j--) {
    if (repeatsCount(j ** 2 + "") === sRepeats) {
      return j ** 2;
    }
  }

  return -1;
}
const repeatsCount = (str) => {
  const obj = {};
  for (let i = 0; i < str.length; i++) {
    obj[str[i]] ? obj[str[i]]++ : (obj[str[i]] = 1);
  }
  return Object.values(obj)
    .sort((a, b) => a - b)
    .join("");
};

===

function constructSquare(s) {
  //coding and coding..
  let num = "";
  const charCountArr = Array.from(new Set(s.split("")))
    .map((char) => s.match(new RegExp(char, "g")).length)
    .sort((a, b) => a - b);
  console.log(charCountArr);
  if (s.length % 2 === 0) {
    num = "9".repeat(s.length / 2);
  } else {
    num = Math.floor(Math.sqrt("1" + "0".repeat(s.length)));
  }

  for (let i = num; i > 0; i--) {
    const sqr = (i * i).toString();
    const digitCountArr = Array.from(new Set(sqr.split("")))
      .map((char) => sqr.match(new RegExp(char, "g")).length)
      .sort((a, b) => a - b);
    if (JSON.stringify(charCountArr) === JSON.stringify(digitCountArr)) {
      return Number(sqr);
    }
  }
  return -1;
}

*/

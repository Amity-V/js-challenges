// Link: https://www.codewars.com/kata/58870402c81516bbdb000088/javascript

/*

How many strings equal to A can be constructed using letters from the string B?
Each letter can be used only once and in one string only.

Example

For A = "abc" and B = "abccba", the output should be 2.

We can construct 2 strings A with letters from B.

Input/Output

[input] string A

    String to construct, A contains only lowercase English letters.
    Constraints: 3 ≤ A.length ≤ 9.

[input] string B

    String containing needed letters, B contains only lowercase English letters.
    Constraints: 3 ≤ B.length ≤ 50.

[output] an integer

*/

const stringsConstruction = (A, B) => {
  const nLetters = {};
  const copies = {};
  let min = null;

  A.split("").map((l, _, wordArr) => {
    nLetters[l] = wordArr.reduce(
      (acc, curr) => (l === curr ? acc + 1 : acc),
      0
    );

    copies[l] = B.split("").reduce(
      (acc, curr) => (curr === l ? acc + 1 : acc),
      0
    );
  });

  for (let letter in copies) {
    const num = Math.floor(copies[letter] / nLetters[letter]);

    min = min === null ? num : num < min ? num : min;
  }

  return min;
};

console.log(stringsConstruction("abc", "abccba")); // 2
console.log(stringsConstruction("abc", "def")); // 0
console.log(stringsConstruction("zzz", "zzzzzzzzzzz")); // 3
console.log(stringsConstruction("gqmetebzz", "zzggqembzzzbmfbqeztblmetmq")); // 1

/* Top 3 solutions: (sorted by best practices)

===

function stringsConstruction(str, target) {
  for (let i = 0; ; i++) {
    for (let c of str) {
      if (target.includes(c)) target = target.replace(c, "-");
      else return i;
    }
  }
}

===

const stringsConstruction = (A, B) =>
  Math.min(
    ...[...A].map(
      (val) =>
        ([...B].filter((v) => v === val).length /
          A.match(new RegExp(val, `g`)).length) ^
        0
    )
  );

===

function stringsConstruction(a, b) {
  let freq = {};
  let strings = 0;
  for (let i = 0; i < b.length; i++) {
    if (freq[b[i]]) {
      freq[b[i]]++;
    } else {
      freq[b[i]] = 1;
    }
  }
  while (true) {
    let counter = 0;
    for (let i = 0; i < a.length; i++) {
      if (freq[a[i]]) {
        counter++;
        freq[a[i]]--;
      }
    }
    if (counter < a.length) return strings;
    strings++;
  }
}

*/

// Link: https://www.codewars.com/kata/573975d3ac3eec695b0013e0

/*

Coding in function findSimilarity. function accept two parameters: str,
a sentence contains some words, separated by spaces; word, a sample word.

Your task is to keep the words that are similar to the sample word, and
to remove the other words.

The similarity is defined as: the same length as the sample; the letter
at the beginning and the end of word are same as the sample too.

If there are no similar words in the sentence, should return an empty string.

Examples

    findSimilarity("bag dog dig dot doog dogs","dog") should return "dog dig"
    findSimilarity("bag dog dig dot doog dogs","dig") should return "dog dig"
    findSimilarity("bag dog dig dot doog dogs","dot") should return "dot"
    findSimilarity("bag dog dig dot doog dogs","god") should return ""

Hint: Use filter() will make your work easier; If you don't know how to solve
the kata, please refer to the examples of lesson.

*/

const findSimilarity = (str, word) => {
  const regstr = `^${word[0]}${word
    .slice(1, -1)
    .replace(/./g, ".")}${word.slice(-1)}$`;

  return str
    .split(" ")
    .filter((s) => new RegExp(regstr).test(s))
    .join(" ");
};

console.log(findSimilarity("bag dog dig dot doog dogs", "dog")); // "dog dig"
console.log(findSimilarity("bag dog dig dot doog dogs", "dig")); // "dog dig"
console.log(findSimilarity("bag dog dig dot doog dogs", "dot")); // "dot"
console.log(findSimilarity("bag dog dig dot doog dogs", "god")); // ""

/* Top 3 solutions: (sorted by best practices)

===

function findSimilarity(str, word) {
  var reg = new RegExp("^" + word.replace(/\B.\B/g, ".") + "$"); // \B match non character boundary
  return str
    .split(/ /)
    .filter((x) => reg.test(x))
    .join(" ");
}

===

findSimilarity = (str, w) =>
  str
    .split(" ")
    .filter(
      (a) => a.length == w.length && a[0] == w[0] && a.slice(-1) == w.slice(-1)
    )
    .join(" ");

===

function findSimilarity(str, word) {
  const regex = new RegExp(`\\b${word.replace(/\B.\B/g, "\\w")}\\b`, "g");
  return (str.match(regex) || []).join(" ");
}

*/

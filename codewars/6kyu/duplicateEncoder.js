// Link: https://www.codewars.com/kata/duplicate-encoder

/*

The goal of this exercise is to convert a string to a new string
where each character in the new string is "(" if that character
appears only once in the original string, or ")" if that character
appears more than once in the original string. Ignore capitalization
when determining if a character is a duplicate.

    "din"      =>  "((("
    "recede"   =>  "()()()"
    "Success"  =>  ")())())"
    "(( @"     =>  "))((" 

*/

function duplicateEncode(word) {
  const lowerCasedWord = word.toLowerCase();
  const encoded = [];

  for (const char of lowerCasedWord) {
    encoded.push(
      lowerCasedWord.split("").filter((c) => c === char).length > 1 ? ")" : "("
    );
  }

  return encoded.join("");
}

console.log(duplicateEncode("din")); // (((
console.log(duplicateEncode("recede")); // ()()()
console.log(duplicateEncode("Success")); // )())()) - should ignore case
console.log(duplicateEncode("(( @")); // ))((

/* Top 3 solutions: (sorted by best practices)

===

function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split("")
    .map(function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? "(" : ")";
    })
    .join("");
}

===

function duplicateEncode(word) {
  var unique = "";
  word = word.toLowerCase();
  for (var i = 0; i < word.length; i++) {
    if (word.lastIndexOf(word[i]) == word.indexOf(word[i])) {
      unique += "(";
    } else {
      unique += ")";
    }
  }
  return unique;
}

===

function duplicateEncode(word) {
  word = word.toLowerCase();
  return word.replace(/./g, (m) =>
    word.indexOf(m) == word.lastIndexOf(m) ? "(" : ")"
  );
}

*/

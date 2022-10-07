// Link: https://www.codewars.com/kata/run-length-encoding

/*

    Run-length encoding (RLE) is a very simple form of data compression in
    which runs of data (that is, sequences in which the same data value occurs
    in many consecutive data elements) are stored as a single data value
    and count, rather than as the original run. Wikipedia

Your task is to write such a run-length encoding. For a given string, return a list
(or array) of pairs (or arrays) [ (i1, s1), (i2, s2), …, (in, sn) ], such that one
can reconstruct the original string by replicating the character sx ix times and
concatening all those strings. Your run-length encoding should be minimal, ie. for
all i the values si and si+1 should differ.

As the article states, RLE is a very simple form of data compression. It's only
suitable for runs of data, as one can see in the following example:

    runLengthEncoding("hello world!")
    [[1,'h'], [1,'e'], [2,'l'], [1,'o'], [1,' '], [1,'w'], [1,'o'], [1,'r'], [1,'l'], [1,'d'], [1,'!']]

It's very effective if the same data value occurs in many consecutive data elements:

    runLengthEncoding("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb")
    // => [[34,'a'], [3,'b']]

*/

const runLengthEncoding = (str) => {
  const resultArr = [];
  let prev, index = -1;

  str.split("").forEach((letter) => {
    if (letter !== prev) {
      resultArr.push([1, letter]);
      index += 1;
      prev = letter;
    } else {
      resultArr[index][0] += 1;
    }
  });

  return resultArr;
};

console.log(runLengthEncoding("")); // []
console.log(runLengthEncoding("abc")); // [[1,'a'],[1,'b'],[1,'c']])
console.log(runLengthEncoding("aab")); // [[2,'a'],[1,'b']]
console.log(runLengthEncoding("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb")); // [[34,'a'], [3,'b']]

/* Top 3 solutions: (sorted by best practices)

===

function runLengthEncoding(str) {
    var arr = [],
        counter = 1;

    for (var i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            counter++;
        } else {
            arr.push([counter, str[i]]);
            counter = 1;
        }
    }

    return arr;
}

*/

// ===

// var runLengthEncoding = function(str){
//     return (str.match(/(.)\1*/g) || []).reduce(function(r, s){
//       return r.push([s.length, s[0]]), r;
//     }, []);
// }

// ===

// const runLengthEncoding = str =>
//   (str.match(/(.)\1*/g) || []).map(val => [val.length, val[0]]);

// ===

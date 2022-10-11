// Link: https://www.codewars.com/kata/digits-explosion

/*

Given a string made of digits [0-9], return a string where each
digit is repeated a number of times equals to its value.

"312" => "333122"
"102269" => "12222666666999999999"

*/

const explode = (s) => {
  return s
    .split("")
    .map((num) => {
      let newNum = "";
      for (let i = 0; i < num; i += 1) {
        newNum += num;
      }
      return newNum;
    })
    .join("");
};

console.log(explode("312")); // "333122"
console.log(explode("102269")); // "12222666666999999999"
console.log(explode("0")); // ""
console.log(explode("000")); // ""
console.log(explode("123")); // "122333"

/* Top 3 solutions: (sorted by best practices)
  
===

function explode(s) {
  return s.split("").map((e) => e.repeat(+e)).join("");
}

===

const explode = s => s.replace(/\d/g, d => d.repeat(d));

===

function explode(s) {
  let newStr = "";
  for (let i = 0; i < s.length; i++) {
    for (let num = s[i]; num > 0; num--) {
      newStr += s[i]
    }
  }
  return newStr
}

*/

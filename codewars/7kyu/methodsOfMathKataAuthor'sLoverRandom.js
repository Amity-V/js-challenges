// Link: https://www.codewars.com/kata/5735956413c2054a680009ec

/*

Coding in function rndCode. Your task is to generate a random verification code.
In accordance with the following rules:

1. the code length should be 8;
2. The 1st and 2nd characters should be two uppercase letters. 
    The range is "ABCDEFGHIJKLM".
3. The 3rd-6th characters should be four numbers.
4. The 7th and 8th characters should be two symbols. The range is "~!@#$%^&*".
5. If Your code runs 100 times, It should generate 100 non duplicate verification codes.

Some valid verification code examples:

    AB1234#$ MG6145$@ KJ2249@&
    CD5678%^ IG7593~% FH8638@&
    EF9012!@ GB7047%$ KD7604^%

*/

const rndCode = () => {
  let code = "";
  const letters = "ABCDEFGHIJKLM";
  const symbols = "~!@#$%^&*";
  const getRandom = (str) => str[~~(str.length * Math.random())];

  for (let i = 1; i <= 8; i += 1) {
    if (i <= 2) code += getRandom(letters);
    if (i >= 3 && i <= 6) code += ~~(8 * Math.random());
    if (i >= 7) code += getRandom(symbols);
  }

  return code;
};

console.log(rndCode());
console.log(rndCode());
console.log(rndCode());

/* Top 3 solutions: (sorted by best practices)

===

function rndCode(){
  var randomRange = function (range, count) {
    var sequence = [];
    for (var i=0; i<count; i++) {
      sequence.push(range[~~(range.length*Math.random())]);
    }
    
    return sequence.join("");
  }
  
  return randomRange('ABCDEFGHIJKLM', 2) + randomRange('0123456789', 4) + randomRange('~!@#$%^&*', 2);
}

===

function rndCode(){
    var p1 = 'ABCDEFGHIJKLM';
    var p2 = '0123456789';
    var p3 = '~!@#$%^&*';
    return [p1,p1,p2,p2,p2,p2,p3,p3].map((v) => v[~~(Math.random() * v.length)]).join('');
}

===

let rndCode =(f= ([s]) => s[~~(s.length * Math.random``)])=>
  `aa0000~~`.replace(/a/g, i => f`ABCDEFGHIJKLM`)
            .replace(/0/g, i => f`0123456789`)
            .replace(/~/g, i => f`~!@#$%^&*`)

*/

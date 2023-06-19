// Link: https://www.codewars.com/kata/588431bb76933b84520000d3/javascript

/*

Given integers a and b, determine whether the following pseudocode results in
an infinite loop

 while (a !== b){
     a++
     b--
 }
 
Assume that the program is executed on a virtual machine which can store arbitrary long numbers and execute forever.

Example
For a = 2 and b = 6, the output should be

isInfiniteProcess(a, b) = false (or equivalent in PHP)

For a = 2 and b = 3, the output should be

isInfiniteProcess(a, b) = true (or equivalent in PHP)

Input/Output
[input] integer a
Constraints: 0 ≤ a ≤ 100.

[input] integer b
Constraints: 0 ≤ b ≤ 100.

[output] a boolean value
true if the pseudocode will never stop, false otherwise.

*/

const isInfiniteProcess = (a, b) => {
  const isOdd = a % 2 > 0 && b % 2 > 0;
  const isEven = a % 2 === 0 && b % 2 === 0;

  return !(a <= b && (isEven || isOdd));
};

console.log(isInfiniteProcess(2, 6)); // false
console.log(isInfiniteProcess(2, 3)); // true
console.log(isInfiniteProcess(2, 10)); // false
console.log(isInfiniteProcess(0, 1)); // true
console.log(isInfiniteProcess(3, 1)); // true
console.log(isInfiniteProcess(10, 10)); // false
console.log(isInfiniteProcess(5, 10)); // true

/* Top 3 solutions: (sorted by best practices)

===

function isInfiniteProcess(a, b) {
  return a > b || (b - a) % 2 !== 0;
}

===

const isInfiniteProcess = (a, b) =>
  a > b || (b - a) % 2 > 0;

===

function isInfiniteProcess(a, b) {
  return a>b||(a<b&&(b-a)%2!=0);
}

*/

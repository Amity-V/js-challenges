// Link: https://www.codewars.com/kata/5886c6b2f3b6ae33dd0000be

/*

Reversing an array can be a tough task, especially for a novice programmer. Mary
just started coding, so she would like to start with something basic at first. 
Instead of reversing the array entirely, she wants to swap just its first and last
elements.

Given an array arr, swap its first and last elements and return the resulting array.

Example

For arr = [1, 2, 3, 4, 5], the output should be [5, 2, 3, 4, 1]

Input/Output

[input] integer array arr

    Constraints: 0 ≤ arr.length ≤ 50,  -1000 ≤ arr[i] ≤ 1000

[output] an integer array

    Array arr with its first and its last elements swapped.

*/

const firstReverseTry = (arr) => {
  if (arr.length < 2) return arr;

  const head = arr.shift();
  const tail = arr.pop();

  return [tail, ...arr, head];
};

console.log(firstReverseTry([1, 2, 3, 4, 5])); // [5,2,3,4,1]
console.log(firstReverseTry([])); // []
console.log(firstReverseTry([111])); // [111]
console.log(firstReverseTry([23, 54, 12, 3, 4, 56, 23, 12, 5, 324])); // [324, 54, 12, 3, 4, 56, 23, 12, 5, 23]
console.log(firstReverseTry([-1, 1])); // [1,-1]

/* Top 3 solutions: (sorted by best practices)

===

function firstReverseTry(arr) {
  if (arr.length > 1) {
    var first = arr[0];
    arr[0] = arr[arr.length-1];
    arr[arr.length-1] = first;
  }
  return arr
}

===

function firstReverseTry(arr) {
  return arr.length > 1 ? arr.slice(-1).concat(arr.slice(1, -1), arr[0]) : arr
}

===

const firstReverseTry = (arr) =>
  arr.length > 1 ? [arr.pop(), ...arr.slice(1), arr.shift()] : arr;

*/

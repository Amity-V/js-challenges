// Link: https://www.codewars.com/kata/5886d35d4703f125a6000008/javascript

/*

We define the middle of the array arr as follows:

if arr contains an odd number of elements, its middle is the element whose index
number is the same when counting from the beginning of the array and from its end;

if arr contains an even number of elements, its middle is the sum of the two elements
whose index numbers when counting from the beginning and from the end of the array
differ by one.

An array is called smooth if its first and its last elements are equal to one another
and to the middle. Given an array arr, determine if it is smooth or not.

Example

For arr = [7, 2, 2, 5, 10, 7], the output should be true

The first and the last elements of arr are equal to 7, and its middle also equals 2 + 5 = 7. Thus, the array is smooth and the output is true.

For arr = [-5, -5, 10], the output should be false

The first and middle elements are equal to -5, but the last element equals 10. Thus, arr is not smooth and the output is false.

Input/Output

[input] integer array arr

    The given array.
    Constraints: 2 ≤ arr.length ≤ 103, -103 ≤ arr[i] ≤ 103.

[output] a boolean value

    true if arr is smooth, false otherwise.

*/

const isSmooth = (arr) => {
  const middle =
    arr.length % 2
      ? arr[Math.floor(arr.length / 2)]
      : arr[arr.length / 2] + arr[arr.length / 2 - 1];

  return arr[0] === middle && arr[arr.length - 1] === middle;
};

console.log(isSmooth([7, 2, 2, 5, 10, 7])); // true
console.log(isSmooth([-12, 34, 40, -5, -12, 4, 0, 0, -12])); // true
console.log(isSmooth([-5, -5, 10])); // false
console.log(isSmooth([4, 2])); // false
console.log(isSmooth([45, 23, 12, 33, 12, 453, -234, -45])); // false
console.log(isSmooth([9, 0, 15, 9])); // false
console.log(isSmooth([-6, 6, -6])); // false
console.log(isSmooth([26, 26, -17])); // false
console.log(isSmooth([-7, 5, 5, 10])); // false
console.log(isSmooth([3, 4, 5])); // false
console.log(isSmooth([-5, 3, -1, 9])); // false

/* Top 3 solutions: (sorted by best practices)

===

function isSmooth(a) {
  return (
    a[0] === a[a.length - 1] &&
    a[0] ===
      (a.length % 2
        ? a[~~(a.length / 2)]
        : a[a.length / 2 - 1] + a[a.length / 2])
  );
}

===

const isSmooth = (arr) =>
  new Set([
    arr[0],
    arr[arr.length - 1],
    arr[arr.length >> 1] + (arr.length % 2 ? 0 : arr[--arr.length >> 1]),
  ]).size === 1;

===

function isSmooth(arr) {
  if (arr.length % 2 === 0) {
    let a2 = arr.length / 2 + 1;
    let b2 = arr.slice(0, a2);
    let c2 = b2.slice(-1);
    let d2 = b2.slice(-2);
    var sum = c2.map(function (num, idx) {
      return num + d2[idx];
    });
    let el = arr.slice(-1);

    if (
      sum.toString() === arr[0].toString() &&
      sum.toString() === el.toString()
    ) {
      return true;
    } else {
      return false;
    }
  } else if (arr.length % 2 != 0) {
    let a = (arr.length / 2).toFixed(0);
    let b = arr.slice(0, a);
    let c = b.slice(-1);
    let d = arr.slice(-1);

    if (c.toString() === d.toString()) {
      return true;
    } else {
      return false;
    }
  }
}

*/

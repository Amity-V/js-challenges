// Link: https://www.codewars.com/kata/array-deep-count

/*

Array.prototype.length will give you the number of top-level elements in an array.

Your task is to create a function deepCount that returns the number of ALL elements
within an array, including any within inner-level arrays.

For example:

    deepCount([1, 2, 3]);  
    //>>>>> 3
    deepCount(["x", "y", ["z"]]);  
    //>>>>> 4
    deepCount([1, 2, [3, 4, [5]]]);  
    //>>>>> 7

The input will always be an array.

*/

const deepCount = (a) => {
  let length = 0;

  const checkLength = (data) => {
    if (data.hasOwnProperty("length") && typeof data !== "string") {
      length += data.length;

      for (const arr of data) {
        checkLength(arr);
      }
    }
  };

  checkLength(a);

  return length;
};

console.log(deepCount([])); // 0 - "Expected 0"
console.log(deepCount([1, 2, 3])); // 3 - "Expected 3"
console.log(deepCount(["x", "y", ["z"]])); // 4 - "Expected 4"
console.log(deepCount([1, 2, [3, 4, [5]]])); // 7 - "Expected 7"
console.log(deepCount([[[[[[[[[]]]]]]]]])); // 8 - "Expected 8"

/* Top 3 solutions: (sorted by best practices)

===

function deepCount(a) {
  return a.reduce(
    (s, e) => s + (Array.isArray(e) ? deepCount(e) : 0),
    a.length
  );
}

===

function deepCount(a) {
  let count = a.length;
  for (let i = 0; i < a.length; i++)
    if (Array.isArray(a[i])) count += deepCount(a[i]);
  return count;
}

===

function deepCount(array) {
  var count = array.length
  
  for (const element of array) {
    if (Array.isArray(element)) {
      count += deepCount(element)
    }
  }
  
  return count
}

*/

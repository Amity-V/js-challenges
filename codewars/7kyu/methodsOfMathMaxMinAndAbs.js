// Link: https://www.codewars.com/kata/5733d6c2d780e20173000baa

/*

Coding in function maxMin. function accept 2 parameter arr1 and arr2. They are
two number array and have the same number of elements.

First, calculate the difference of the same index of the arr1 and arr2. Like this:

    [1,3,5]
    | | |   --->  8, 5, 2
    [9,8,7]

Please note that the difference is positive. Such as the above 1 and 9, the
difference should be 8, not -8. I think abs() can help you get the correct result ;-)

Then find the maximum and minimum values of them, and return the results in the form
of an array. Like this:

      maxvalue , minvalue
    [    8     ,    2     ]

Examples

    maxMin([1,3,5],[9,8,7])               should return [8,2]
    maxMin([1,10,100,1000],[0,0,0,0])     should return [1000,1]
    maxMin([10,20,30,40],[111,11,1,-111]) should return [151,9]

*/

const maxMin = (arr1, arr2) => {
  const diff = [];

  arr1.map((n, i) => {
    diff.push(Math.abs(n - arr2[i]));
  });

  return [Math.max(...diff), Math.min(...diff)];
};

console.log(maxMin([1, 3, 5], [9, 8, 7])); // [8,2]
console.log(maxMin([1, 10, 100, 1000], [0, 0, 0, 0])); // [1000,1]
console.log(maxMin([10, 20, 30, 40], [111, 11, 1, -111])); // [151,9]

/* Top 3 solutions: (sorted by best practices)

===

function maxMin(arr1,arr2){
  var rs=arr1.map((x,i)=>Math.abs(x-arr2[i]));
  return [Math.max(...rs),Math.min(...rs)];
}

===

function maxMin(arr1,arr2){
  var diffs = [];
  for (i = 0; i < arr1.length; i++) {
    diffs.push(Math.abs(arr1[i]-arr2[i]))
  }
  return [Math.max(...diffs), Math.min(...diffs)]
}

===

function maxMin(arr1,arr2){
  var k = arr1.reduce((a,b,i)=>a.concat(Math.abs(b-arr2[i])),[])
  return [Math.max(...k),Math.min(...k)]
}

*/

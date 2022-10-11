// Link: https://www.codewars.com/kata/length-of-missing-array

/*

You get an array of arrays. If you sort the arrays by their length,
you will see, that their length-values are consecutive.

But one array is missing!

You have to write a method, that return the length of the missing array.

Example:

    [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

If the array of arrays is null or empty, the method should return 0.
When an array in the array is null or empty, the method should return 0 too!
There will always be a missing element and its length will be always between the given arrays.

*/

const getLengthOfMissingArray = (arrayOfArrays) => {
  if (!arrayOfArrays || arrayOfArrays.includes(null)) {
    return 0;
  }

  const sortedArrOfLengths = arrayOfArrays
    .map((arr) => arr.length)
    .sort((a, b) => a - b);

  let current = sortedArrOfLengths[0];

  for (const length of sortedArrOfLengths) {
    if (length === 0) {
      return 0;
    }
    if (length !== current + 1 && length !== current) {
      return length - 1;
    }
    current = length;
  }

  return 0;
};

console.log(getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]])); // 3
console.log(getLengthOfMissingArray([[5, 2, 9], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]])); // 2
console.log(getLengthOfMissingArray([[null], [null, null, null]])); // 2
console.log(getLengthOfMissingArray([[], [1, 3], [0, 3, 0], [0, 3, 2, 3]])); // 0
console.log(getLengthOfMissingArray([])); // 0

/* Top 3 solutions: (sorted by best practices)

===

function getLengthOfMissingArray(arrayOfArrays) {
  const lengths = (arrayOfArrays || [])
    .map(a => a ? a.length : 0)
    .sort((a, b) => a - b)
  
  if (lengths.includes(0)) {
    return 0
  }

  for (let i = 0; i < lengths.length - 1; i++) {
    if (lengths[i] + 1 !== lengths[i + 1]) {
      return lengths[i] + 1
    }
  }

  return 0
}

===

function getLengthOfMissingArray(arr) {
  return !arr||(ar=arr.map((x,i)=>x?x.length:0).sort((a,b)=>a-b)).indexOf(0)>-1
         ?0:ar.filter((x,i)=>x!=i+ar[0]).concat([1])[0]-1
}

===

function getLengthOfMissingArray(arrayOfArrays) {
  if (arrayOfArrays == null || arrayOfArrays.length == 0)
    return 0;
  
  var length = arrayOfArrays.length;
  var lengths = [];
  
  for (var i=0; i<length; ++i)
  {
    if (arrayOfArrays[i] == null || arrayOfArrays[i].length == 0)
      return 0;
    
    lengths[arrayOfArrays[i].length] = true;
  }
  
  var lowest = 0;
  
  for (var i=1, l=lengths.length; i<=l; ++i)
  {
    if (!lengths[i])
    {
      if (lowest != 0)
        return i;
    }
    else
      lowest = i;
  }
  
}


*/

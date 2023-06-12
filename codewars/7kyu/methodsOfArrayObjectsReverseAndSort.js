// Link: https://www.codewars.com/kata/572df796914b5ba27c000c90

/*

Coding in function sortIt. function accept 1 parameters arr, it's a number
array. Your task is to sort the array according to the specified conditions,
and returns a new array(should not modify the original array).

conditions1: according to the number of elements(in ascending order) for example:

    sortIt([1,1,1,2,2,3]) should return [3,2,2,1,1,1]
    because [1,1,1,2,2,3] has one 3, two 2 and three 1

conditions2: If the same number of elements, according to the number values(in
descending order) for example:

    sortIt([1,1,1,2,2,2,3,3,3]) should return [3,3,3,2,2,2,1,1,1]
    because number of 3,2 and 1 both are three, then according to 3>2>1

Comprehensive two conditions should be like this:

    sortIt([1,2,3,4,4,5,5,6,6]) should return [3,2,1,6,6,5,5,4,4]

*/

const sortIt = (arr) => {
  const arrCopy = arr.slice();
  const count = {};

  for (let num of arrCopy) {
    if (!count[num]) {
      count[num] = 1;
    } else {
      count[num] += 1;
    }
  }

  return arrCopy.sort((a, b) => {
    if (count[a] === count[b]) return b - a;
    if (count[a] > count[b]) return 1;
    return -1;
  });
};

console.log(sortIt([1, 2, 3, 4, 4, 5, 5, 6, 6])); // [3,2,1,6,6,5,5,4,4]
console.log(sortIt([1, 1, 1, 2, 2, 2, 3, 3, 3])); // [3,3,3,2,2,2,1,1,1]
console.log(sortIt([1, 1, 1, 2, 2, 3])); // [3,2,2,1,1,1]
console.log(sortIt([1, 3, 3, 5, 2, 2, 4, 6, 6, 7, 7, 7])); // [5,4,1,6,6,3,3,2,2,7,7,7]

/* Top 3 solutions: (sorted by best practices)

===

function sortIt(arr){
  let numberOf = {};
  arr.forEach(x => numberOf[x] = (numberOf[x]||0) + 1);
  return arr.slice().sort((x, y) => numberOf[x] - numberOf[y] || y - x);
}

===

const sortIt = arr => {
  var res = [...arr];
  res.sort((a,b) => {
    let n = arr.filter(x => x === a).length,
        m = arr.filter(y => y === b).length;
    return n == m ? b - a : n - m;
    });
  return res;
}

===

function sortIt(arr){
  ar = arr.slice()
  ar.sort((x,y) => {
    nx = 0;
    ny = 0;
    for (i of arr) {
      if (i == x) nx++;
      if (i == y) ny++;
    }
    if (nx > ny) return(1);
    if (nx < ny) return(-1);
    if (nx == ny) return(y-x)
  })
  return(ar)
}

*/

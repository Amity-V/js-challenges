// Link: https://www.codewars.com/kata/572ab0cfa3af384df7000ff8

/*

Create a function shuffleIt. The function accepts two or more parameters. The first
parameter arr is an array of numbers, followed by an arbitrary number of numeric
arrays. Each numeric array contains two numbers, which are indices for elements in
arr (the numbers will always be within bounds). For every such array, swap the
elements. Try to use all your new skills: arrow functions, the spread operator,
destructuring, and rest parameters.

Example:

    shuffleIt([1,2,3,4,5],[1,2]) should return [1,3,2,4,5]
    shuffleIt([1,2,3,4,5],[1,2],[3,4]) should return [1,3,2,5,4]
    shuffleIt([1,2,3,4,5],[1,2],[3,4],[2,3]) should return [1,3,5,2,4]

*/

const shuffleIt = (arr, ...arrs) => {
  const result = arr.slice();

  arrs.forEach((indexes) => {
    const [a, b] = indexes;
    const tmp = result[a];
    result[a] = result[b];
    result[b] = tmp;
  });

  return result;
};

/* Top 3 solutions: (sorted by best practices)

===

var shuffleIt=(arr,...ex)=>{
  for ([a,b] of ex) [arr[a],arr[b]]=[arr[b],arr[a]];
  return arr;
}

===

function shuffleIt(arr, ...exchanges){
  exchanges.forEach(([i, j]) => [arr[i], arr[j]] = [arr[j], arr[i]]);
  return arr;
}

===

function shuffleIt(arr,...swaps) {
 for (swap of swaps) {
   var [a, b] = swap;
   [arr[a], arr[b]] = [arr[b], arr[a]];
 }
  return arr;
}

*/

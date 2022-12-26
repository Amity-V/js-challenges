// Link: https://www.codewars.com/kata/5721a78c283129e416000999

/*

The function pickIt accepts 1 parameter, arr, which is an array of numbers. We need to
traverse arr by using a for loop. If an element is an odd number, push it to the odd
array, and if it's an even number, push it to the evenarray.

I've defined two arrays odd and even in the function, and also wrote the return statement.
Your work is to write a for loop.

*/

const pickIt = (arr) => {
  const odd = [];
  const even = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] % 2) odd.push(arr[i]);
    else even.push(arr[i]);
  }

  return [odd, even];
};

/* Top 3 solutions: (sorted by best practices)

===

function pickIt (arr) {
  
  let odd = []
  let even =[]
      
  for (var x of arr) {
      ((x % 2) ? odd : even).push(x)    
  }
      
  return [odd, even]
}

===

function pickIt(arr){
  var odd=[],even=[];
  for (i of arr) {
  	if (i % 2 === 0) {
    	even.push(i);
    } else {
    	odd.push(i);
    }
  }
  
  
  return [odd,even];
}

*/

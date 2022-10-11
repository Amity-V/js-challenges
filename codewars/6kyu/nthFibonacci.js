// Link: https://www.codewars.com/kata/n-th-fibonacci

/*

I love Fibonacci numbers in general, but I must admit I love
some more than others.

I would like for you to write me a function that when given a
number (n) returns the n-th number in the Fibonacci Sequence.

For example:

    nthFibo(4) == 2

Because 2 is the 4th number in the Fibonacci Sequence.

For reference, the first two numbers in the Fibonacci sequence
are 0 and 1, and each subsequent number is the sum of the previous two.

*/

const nthFibo = (n) => {
  let a = 0;
  let b = 1;

  for (let i = 2; i < n; i += 1) {
    const c = a + b;
    a = b;
    b = c;
  }

  return n === 1 ? a : b;
};

console.log(nthFibo(1)); // 0 - "1-st Fibo")
console.log(nthFibo(2)); // 1 - "2-nd Fibo")
console.log(nthFibo(3)); // 1 - "3-rd Fibo")
console.log(nthFibo(4)); // 2 - "4-th Fibo")

/* Top 3 solutions: (sorted by best practices)

===

function nthFibo(n) {
  let [prev, curr] = [0, 1];
  for (let i = 1; i < n; i++) [prev, curr] = [curr, prev + curr];
  return prev;
}

===

function nthFibo(n) {
  return n < 2 ? 0 : n == 2 ? 1 : nthFibo(n-1) + nthFibo(n-2);
}

===

function nthFibo(n) {
  let a = 0, b = 1;
  
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return n == 1? a: b;
}

*/

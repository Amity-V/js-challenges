// Link: https://www.codewars.com/kata/5886dea04703f1712d000051/javascript

/*

We define the weakness of number n as the number of positive integers smaller
than n that have more divisors than n. It follows that the weaker the number,
the greater overall weakness it has.

For the given integer n, you need to answer two questions:

    what is the weakness of the weakest numbers in the range [1, n]?
    how many numbers in the range [1, n] have this weakness?

Return the answer as a tuple ( where applicable: array ) of two elements, where
the first element is the answer to the first question, and the second element
is the answer to the second question.

Example

For n = 9, the output should be [2, 2]

Here are the number of divisors and the specific weaknesses of each number in
range [1, 9]:

    1: d(1) = 1, weakness(1) = 0;
    2: d(2) = 2, weakness(2) = 0;
    3: d(3) = 2, weakness(3) = 0;
    4: d(4) = 3, weakness(4) = 0;
    5: d(5) = 2, weakness(5) = 1;
    6: d(6) = 4, weakness(6) = 0;
    7: d(7) = 2, weakness(7) = 2;
    8: d(8) = 4, weakness(8) = 0;
    9: d(9) = 3, weakness(9) = 2.

As you can see, the maximum weakness is 2, and there are 2 numbers with that weakness.

Input/Output

[input] integer n

    Constraints: 1 ≤ n ≤ 1000

[output] a pair of integers ( see example tests what encoding is actually required )
    the weakness of the weakest number, and the number of integers in range [1, n]
        with this weakness

*/

const weakNumbers = (n) => {
  const divMap = new Map();

  for (let i = 1; i <= n; i += 1) {
    for (let j = 1; j <= i; j += 1) {
      if (!(i % j)) {
        divMap.set(i, divMap.get(i) ? divMap.get(i) + 1 : 1);
      }
    }
  }

  const divArr = Array.from(divMap);
  const weakMap = new Map();
  let maxWeak = 0;

  divArr.forEach((val, i, arr) => {
    const [num, dividers] = val;
    let weak = 0;

    for (let j = 1; j < num; j += 1) {
      if (arr[j][1] > dividers) {
        weak += 1;
      }
    }

    if (weak > maxWeak) {
      maxWeak = weak;
    }

    weakMap.set(weak, weakMap.get(weak) ? weakMap.get(weak) + 1 : 1);
  });

  return [maxWeak, weakMap.get(maxWeak)];
};

console.log(weakNumbers(1)); // [0,1]
console.log(weakNumbers(2)); // [0,2]
console.log(weakNumbers(4)); // [0,4]
console.log(weakNumbers(7)); // [2,1]
console.log(weakNumbers(9)); // [2,2]
console.log(weakNumbers(500)); // [403,1]

/* Top 3 solutions: (sorted by best practices)

===

const weakNumbers = (n) => {
  const arr1 = [...Array(n)].map((_, idx) =>
    [...Array(++idx)]
      .map((_, idx) => ++idx)
      .reduce((pre, val) => pre + !(idx % val), 0)
  );
  const arr2 = arr1.map((_, idx) =>
    arr1.slice(0, idx).reduce((pre, val) => pre + (val > arr1[idx]), 0)
  );
  return [
    Math.max(...arr2),
    arr2.reduce((pre, val) => pre + (val === Math.max(...arr2)), 0),
  ];
};

===

function getFactors(x) {
  var factors = [1],
    i;
  for (i = 2; i < x / 2 + 1; i++) {
    if (x % i == 0) factors.push(i);
  }
  factors.push(x);
  return factors;
}

function weakNumbers(n) {
  var factors = [[]],
    weaknesses = [],
    weakness,
    i,
    j;
  for (i = 1; i < n + 1; i++) {
    factors.push(getFactors(i));
    weakness = 0;
    for (j = i - 1; j > 0; j--) {
      if (factors[i].length < factors[j].length) weakness++;
    }
    weaknesses.push(weakness);
  }
  for (var i = 0, weakest = 0; i < weaknesses.length; i++)
    if (weakest < weaknesses[i]) weakest = weaknesses[i];
  for (var i = 0, weakestNumbers = 0; i < weaknesses.length; i++) {
    if (weaknesses[i] == weakest) weakestNumbers++;
  }
  return [weakest, weakestNumbers];
}

===

function weakNumbers(n) {
  let D=Array(n).fill(1),W=[]
  for(i=0;i<n;i++){
    for(j=2;j<i;j++)if((i+1)%j==0)D[i]++
    W[i]=D.filter(d=>d>D[i]).length
  }
  return [k=Math.max(...W),W.filter(w=>w==k).length]
}

*/

// Link: https://www.codewars.com/kata/sorting-by-bits

/*

In this kata you're expected to sort an array of 32-bit integers in ascending
order of the number of on bits they have.

E.g Given the array [7, 6, 15, 8]

    7 has 3 on bits (000...0111)
    6 has 2 on bits (000...0011)
    15 has 4 on bits (000...1111)
    8 has 1 on bit (000...1000)

So the array in sorted order would be [8, 6, 7, 15].

In cases where two numbers have the same number of bits, compare their real
values instead.

E.g between 10 (...1010) and 12 (...1100), they both have the same number of
on bits '2' but the integer 10 is less than 12 so it comes first in sorted order.

Your task is to write the function sortBybit() that takes an array of integers
and sort them as described above.

Note: your solution has to sort the array in place.

    [3, 8, 3, 6, 5, 7, 9, 1]   =>    [1, 8, 3, 3, 5, 6, 9, 7]

*/

const sortByBit = (arr) => {
  const getOnBit = (num) => {
    let binary = 0;

    for (let i = num; i > 0; ) {
      binary += i % 2;
      i = Math.floor(i / 2);
    }

    return binary;
  };

  return arr.sort((a, b) => {
    const _a = getOnBit(a);
    const _b = getOnBit(b);

    if (_a === _b) {
      return a - b;
    }

    return _a - _b;
  });
};

console.log(sortByBit([3, 8, 3, 6, 5, 7, 9, 1])); // [1, 8, 3, 3, 5, 6, 9, 7]
console.log(sortByBit([9,4,5,3,5,7,2,56,8,2,6,8,0])); // [0, 2, 2, 4, 8, 8, 3, 5, 5, 6, 9, 7, 56]

/* Top 3 solutions: (sorted by best practices)

===

const sortByBit = arr => arr.sort((a, b) => a.toString(2).replace(/0/g, '') - b.toString(2).replace(/0/g, '') || a - b)

===

function sortByBit(arr) {
  
  function numberOfBits(num){
    let bits=num.toString(2);
    let arrBits = bits.split('');
    let numOfOnes=0;
    for (let i=0; i<arrBits.length;i++){
      if(arrBits[i] == '1'){
        numOfOnes++;
      }
    } return numOfOnes;
  }
  return arr.sort((a,b)=> {if(numberOfBits(a)==numberOfBits(b)){return a-b} else {return numberOfBits(a)-numberOfBits(b)}})
}

===

let sortByBit = a => a.sort((m, n) => m.toString(2).replace(/0/g, '').length - n.toString(2).replace(/0/g, '').length || m - n);

*/

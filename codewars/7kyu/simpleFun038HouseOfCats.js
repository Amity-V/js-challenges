// Link: https://www.codewars.com/kata/588810c99fb63e49e1000606/train/javascript

/*

There are some people and cats in a house. You are given the number of legs they
have all together. Your task is to return an array containing every possible number
of people that could be in the house sorted in ascending order. It's guaranteed that
each person has 2 legs and each cat has 4 legs.

Example

For legs = 6, the output should be [1, 3].

There could be either 1 cat and 1 person (4 + 2 = 6) or 3 people (2 * 3 = 6).

For legs = 2, the output should be [1].

There can be only 1 person.

Input/Output

[input] integer legs

    The total number of legs in the house.
    Constraints: 2 ≤ legs ≤ 100.

[output] an integer array

    Every possible number of people that can be in the house.

*/

const houseOfCats = (mix, paws = 4, humanLegs = 2) => {
  const possible = [];
  let legs = mix;

  while (legs >= 0) {
    possible.push((mix - paws * Math.floor(legs / paws)) / humanLegs);
    legs -= paws;
  }

  return possible;
};

console.log(houseOfCats(6)); // [1, 3]
console.log(houseOfCats(2)); // [1]
console.log(houseOfCats(8)); // [0, 2, 4]
console.log(houseOfCats(4)); // [0, 2]
console.log(houseOfCats(44)); // [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22]

/* Top 3 solutions: (sorted by best practices)

===

function houseOfCats(legs) {
  let arr = [];
  for (let i = 0; i <= legs / 4; i++) {
    arr.push(legs / 2 - i * 2);
  }
  return arr.reverse();
}

===

const houseOfCats = (legs) =>
  [...Array(legs / 2 + 1).keys()].filter((val) => !((legs - 2 * val) % 4));

===

function houseOfCats(legs) {
  var arr = [];
  var k = 0;
  while (k * 2 <= legs) {
    if ((legs - k * 2) % 4 == 0) arr.push(k);
    k++;
  }
  return arr;
}

*/

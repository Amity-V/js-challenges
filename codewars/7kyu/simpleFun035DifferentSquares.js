// Link: https://www.codewars.com/kata/588805ca44c7e8c3a100013c/javascript

/*

Given a rectangular matrix containing only digits, calculate the number of
different 2 × 2 squares in it.

Example

For

  matrix = [[1, 2, 1],
            [2, 2, 2],
            [2, 2, 2],
            [1, 2, 3],
            [2, 2, 1]]

the output should be 6.

Here are all 6 different 2 × 2 squares:

    1 2
    2 2

    2 1
    2 2

    2 2
    2 2

    2 2
    1 2

    2 2
    2 3

    2 3
    2 1

Input/Output

[input] 2D integer array matrix

    Constraints:
    1 ≤ matrix.length ≤ 100,
    1 ≤ matrix[i].length ≤ 100,
    0 ≤ matrix[i][j] ≤ 9.

[output] an integer

    The number of different 2 × 2 squares in matrix.

*/

const differentSquares = (matrix, uniqueSet = new Set()) => {
  for (let i = 0; i < matrix.length - 1; i += 1) {
    for (let j = 0; j < matrix[i].length; j += 1) {
      if (matrix[i + 1][j + 1] === undefined) break;

      uniqueSet.add(
        `${matrix[i][j]} ${matrix[i][j + 1]} ${matrix[i + 1][j]} ${
          matrix[i + 1][j + 1]
        }`
      );
    }
  }

  return uniqueSet.size;
};

let matrix = [
  [1, 2, 1],
  [2, 2, 2],
  [2, 2, 2],
  [1, 2, 3],
  [2, 2, 1],
];
console.log(differentSquares(matrix)); // 6

matrix = [
  [9, 9, 9, 9, 9],
  [9, 9, 9, 9, 9],
  [9, 9, 9, 9, 9],
  [9, 9, 9, 9, 9],
  [9, 9, 9, 9, 9],
  [9, 9, 9, 9, 9],
];
console.log(differentSquares(matrix)); // 1

matrix = [[3]];
console.log(differentSquares(matrix)); // 0

matrix = [[3, 4, 5, 6, 7, 8, 9]];
console.log(differentSquares(matrix)); // 0

matrix = [[3], [4], [5], [6], [7]];
console.log(differentSquares(matrix)); // 0

matrix = [
  [2, 5, 3, 4, 3, 1, 3, 2],
  [4, 5, 4, 1, 2, 4, 1, 3],
  [1, 1, 2, 1, 4, 1, 1, 5],
  [1, 3, 4, 2, 3, 4, 2, 4],
  [1, 5, 5, 2, 1, 3, 1, 1],
  [1, 2, 3, 3, 5, 1, 2, 4],
  [3, 1, 4, 4, 4, 1, 5, 5],
  [5, 1, 3, 3, 1, 5, 3, 5],
  [5, 4, 4, 3, 5, 4, 4, 4],
];
console.log(differentSquares(matrix)); // 54

/* Top 3 solutions: (sorted by best practices)

===

function differentSquares(m) {
  const res = new Set([]);
  
  for(let row = 0; row < m.length - 1; row++) {
    for(let col = 0; col < m[0].length - 1; col++) {
      res.add(`${m[row][col]}_${m[row][col+1]}_${m[row+1][col]}_${m[row+1][col+1]}`)
    }
  }
  
  return res.size;
}

===

const differentSquares = (matrix) =>
  new Set(
    [...Array(matrix.length - 1).keys()].reduce(
      (pre, val) => [
        ...pre,
        ...[...Array(matrix[val].length - 1)].map(
          (_, idx) =>
            `` +
            matrix[val][idx] +
            matrix[val][idx + 1] +
            matrix[val + 1][idx] +
            matrix[val + 1][idx + 1]
        ),
      ],
      []
    )
  ).size;

===

function differentSquares(matrix) {
  let res = [];
  for (let i = 0; i < matrix.length - 1; i++) {
    for (let j = 0; j < matrix[i].length - 1; j++) {
      if (!(j + 2)) continue;
      res.push(
        JSON.stringify(
          matrix[i].slice(j, j + 2).concat(matrix[i + 1].slice(j, j + 2))
        )
      );
    }
  }
  return new Set(res).size;
}

*/

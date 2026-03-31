// The Grinch has been up to his tricks in the North Pole and has planted explosive coal bombs 💣 in the elves' toy factory. He wants all the toys to be rendered useless, and that's why he has left a grid where some cells have explosive coal (true) and others are empty (false).

// The elves need your help to map the dangerous areas. Each empty cell should display a number indicating how many explosive coal bombs there are in the adjacent positions, including diagonals.

// detectBombs([
//   [true, false, false],
//   [false, true, false],
//   [false, false, false]
// ])
// // [
// //   [1, 2, 1],
// //   [2, 1, 1],
// //   [1, 1, 1]
// // ]

// detectBombs([
//   [true, false],
//   [false, false]
// ])
// // [
// //   [0, 1],
// //   [1, 1]
// // ]

// detectBombs([
//   [true, true],
//   [false, false],
//   [true, true]
// ])
// // [
// //   [1, 1],
// //   [4, 4],
// //   [1, 1]
// // ]

// Note: Want a hint? You've surely played the Minesweeper game before… 😉

/**
 * @param {boolean[][]} grid
 * @returns {number[][]}
 */

function detectBombs(grid) {
  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  const result = [];

  for (let r = 0; r < grid.length; r += 1) {
    const row = [];

    for (let c = 0; c < grid[0].length; c += 1) {
      const bombCount = directions.reduce((count, [dr, dc]) => {
        return count + (grid[r + dr]?.[c + dc] ? 1 : 0);
      }, 0);

      row.push(bombCount);
    }

    result.push(row);
  }

  return result;
}

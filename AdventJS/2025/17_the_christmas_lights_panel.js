// At the North Pole, they’ve set up a panel of Christmas lights 🎄✨ to decorate the workshop. Each light can be on with a color, or off.

// The panel is represented as a matrix where each cell can be:

// '.' → light off
// 'R' → red light
// 'G' → green light

// The elves want to know if there is a line of 4 lights of the same color that are on and aligned on the panel (only horizontal ↔ or vertical ↕). Lights that are off ('.') don’t count.

// hasFourLights([
//   ['.', '.', '.', '.', '.'],
//   ['R', 'R', 'R', 'R', '.'],
//   ['G', 'G', '.', '.', '.']
// ])
// // true → there are 4 red lights horizontally

// hasFourLights([
//   ['.', 'G', '.', '.'],
//   ['.', 'G', '.', '.'],
//   ['.', 'G', '.', '.'],
//   ['.', 'G', '.', '.']
// ])
// // true → there are 4 green lights vertically

// hasFourLights([
//   ['R', 'G', 'R'],
//   ['G', 'R', 'G'],
//   ['G', 'R', 'G']
// ])
// // false → there are no 4 lights of the same color in a row

// Note: The board can be any size. No diagonals.

/**
 * @param {string[][]} board
 * @returns {boolean}
 */

const hasFourLights = (board) => {
  const rows = board.length;
  const cols = board[0].length;

  for (let r = 0; r < rows; r += 1) {
    let count = 1;
    let prevColor = board[r][0];

    for (let c = 1; c < cols; c += 1) {
      const current = board[r][c];

      if (current === "." || current !== prevColor) {
        count = 1;
        prevColor = current;
      } else {
        count += 1;
        if (count >= 4) return true;
      }
    }
  }

  for (let c = 0; c < cols; c += 1) {
    let count = 1;
    let prevColor = board[0][c];

    for (let r = 1; r < rows; r += 1) {
      const current = board[r][c];

      if (current === "." || current !== prevColor) {
        count = 1;
        prevColor = current;
      } else {
        count += 1;
        if (count >= 4) return true;
      }
    }
  }

  return false;
};

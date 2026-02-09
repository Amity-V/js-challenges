// The Christmas lights panel 🎄✨ in the workshop has been a total success. But the elves want to go one step further: now they want to detect whether there is a line of 4 lights of the same color also on a diagonal.

// The panel is still a matrix where each cell can be:

// '.' → light off
// 'R' → red light
// 'G' → green light

// Now your function must return true if there is a line of 4 lights of the same color that are on and aligned, whether horizontally ↔, vertically ↕ or diagonally ↘↙.

// hasFourInARow([
//   ['R', '.', '.', '.'],
//   ['.', 'R', '.', '.'],
//   ['.', '.', 'R', '.'],
//   ['.', '.', '.', 'R']
// ])
// // true → there are 4 red lights in a ↘ diagonal

// hasFourInARow([
//   ['.', '.', '.', 'G'],
//   ['.', '.', 'G', '.'],
//   ['.', 'G', '.', '.'],
//   ['G', '.', '.', '.']
// ])
// // true → there are 4 green lights in a ↙ diagonal

// hasFourInARow([
//   ['R', 'R', 'R', 'R'],
//   ['G', 'G', '.', '.'],
//   ['.', '.', '.', '.'],
//   ['.', '.', '.', '.']
// ])
// // true → there are 4 red lights in a horizontal line

// hasFourInARow([
//   ['R', 'G', 'R'],
//   ['G', 'R', 'G'],
//   ['G', 'R', 'G']
// ])
// // false → there are no 4 consecutive lights of the same color

// Note: The board can be any size.

/**
 * @param {string[][]} board
 * @returns {boolean}
 */

const hasFourInARow = (board) => {
  const rows = board.length;
  const cols = board[0].length;

  const directions = [
    [0, 1],
    [1, 0],
    [1, 1],
    [1, -1],
  ];

  const checkDirection = (board, r, c, dr, dc) => {
    const color = board[r][c];
    if (color === ".") return false;

    for (let i = 1; i < 4; i += 1) {
      const nr = r + dr * i;
      const nc = c + dc * i;

      if (
        nr < 0 ||
        nr >= rows ||
        nc < 0 ||
        nc >= cols ||
        board[nr][nc] !== color
      ) {
        return false;
      }
    }

    return true;
  };

  for (let r = 0; r < rows; r += 1) {
    for (let c = 0; c < cols; c += 1) {
      for (const [dr, dc] of directions) {
        if (checkDirection(board, r, c, dr, dc)) return true;
      }
    }
  }

  return false;
};

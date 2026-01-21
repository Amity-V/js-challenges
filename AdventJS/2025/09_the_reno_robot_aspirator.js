// The elves have built a robot vacuum reindeer 🦌 (@) to tidy up the workshop a bit before Christmas.
// The reindeer moves on a board to pick things up off the floor (*) and must avoid obstacles (#).

// You will receive two parameters:
// board: a string that represents the board.
// moves: a string with the movements: 'L' (left), 'R' (right), 'U' (up), 'D' (down).

// Movement rules:
// - If the reindeer picks something up off the floor (*) during the moves → return 'success'.
// - If the reindeer goes off the board or crashes into an obstacle (#) → return 'crash'.
// - If the reindeer neither picks anything up nor crashes → return 'fail'.

// Keep in mind that if the reindeer picks something up off the floor, it is already 'success', regardless of whether in later moves it crashes into an obstacle or goes off the board.

// Important: Keep in mind that in the board the first and last lines are blank and must be discarded.

// Example:

// const board = `
// .....
// .*#.*
// .@...
// .....
// `

// moveReno(board, 'D')
// // ➞ 'fail' -> it moves but doesn't pick anything up

// moveReno(board, 'U')
// // ➞ 'success' -> it picks something up (*) right above

// moveReno(board, 'RU')
// // ➞ 'crash' -> it crashes into an obstacle (#)

// moveReno(board, 'RRRUU')
// // ➞ 'success' -> it picks something up (*)

// moveReno(board, 'DD')
// // ➞ 'crash' -> it crashes into the bottom of the board

// moveReno(board, 'UUU')
// // ➞ 'success' -> it picks something up off the floor (*) and then crashes at the top

// moveReno(board, 'RR')
// // ➞ 'fail' -> it moves but doesn't pick anything up

/**
 * @param {string} board - Represent the board situation
 * @param {string} moves - Movement direction
 * @returns {'fail' | 'crash' | 'success'}
 */

const moveReno = (board, moves) => {
  const moveMap = {
    U: { c: 0, r: -1 },
    D: { c: 0, r: 1 },
    L: { c: -1, r: 0 },
    R: { c: 1, r: 0 },
  };

  const boardArr = board
    .trim()
    .split("\n")
    .map((row) => row.split(""));

  const maxRow = boardArr.length - 1;
  const maxCol = boardArr[0].length - 1;

  let reno = { r: 0, c: 0 };

  for (let r = 0; r < boardArr.length; r += 1) {
    const c = boardArr[r].indexOf("@");

    if (c !== -1) {
      reno = { r, c };
      break;
    }
  }

  for (const move of moves) {
    const row = reno.r + moveMap[move].r;
    const col = reno.c + moveMap[move].c;

    if (
      row < 0 ||
      col < 0 ||
      row > maxRow ||
      col > maxCol ||
      boardArr[row][col] === "#"
    )
      return "crash";
    if (boardArr[row][col] === "*") return "success";

    reno.r = row;
    reno.c = col;
  }

  return "fail";
};

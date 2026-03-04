// We have already wrapped hundreds of presents 🎁… but an elf forgot to check if the present, represented by an asterisk *, is inside the box.

// The box has a present (*) and counts as "inside the box" if:
// - It is completely surrounded by # on the box's edges.
// - The * is not on the box's edges.

// Keep in mind that the * can be inside, outside, or may not even be there. We must return true if the * is inside the box and false otherwise.

// Examples:

// inBox([
//   "###",
//   "#*#",
//   "###"
// ]) // ➞ true

// inBox([
//   "####",
//   "#* #",
//   "#  #",
//   "####"
// ]) // ➞ true

// inBox([
//   "#####",
//   "#   #",
//   "#  #*",
//   "#####"
// ]) // ➞ false

// inBox([
//   "#####",
//   "#   #",
//   "#   #",
//   "#   #",
//   "#####"
// ]) // ➞ false

/** @param {string[]} box
 *  @returns {boolean} True if the gift is inside the box
 */

function inBox(box) {
  for (let r = 1; r < box.length - 1; r += 1) {
    for (let c = 1; c < box[0].length - 1; c += 1) {
      if (box[r][c] === "*") return true;
    }
  }

  return false;
}

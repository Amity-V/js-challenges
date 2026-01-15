// In Santa's workshop, the elves have found a mountain of magical gloves in complete disarray. Each glove is described by two values:

// hand: indicates whether it is a left (L) or right (R) glove
// color: the color of the glove (string)

// Your task is to help them match gloves: A valid pair is a left glove and a right glove of the same color.
// You must return a list with the colors of all the pairs found. Keep in mind that there may be several pairs of the same color. The order is determined by whichever pair can be made first.

// 🧩 Examples

// const gloves = [
//   { hand: 'L', color: 'red' },
//   { hand: 'R', color: 'red' },
//   { hand: 'R', color: 'green' },
//   { hand: 'L', color: 'blue' },
//   { hand: 'L', color: 'green' }
// ]

// matchGloves(gloves) // ["red", "green"]

// const gloves2 = [
//   { hand: 'L', color: 'gold' },
//   { hand: 'R', color: 'gold' },
//   { hand: 'L', color: 'gold' },
//   { hand: 'L', color: 'gold' },
//   { hand: 'R', color: 'gold' }
// ]

// matchGloves(gloves2) // ["gold", "gold"]

// const gloves3 = [
//   { hand: 'L', color: 'red' },
//   { hand: 'R', color: 'green' },
//   { hand: 'L', color: 'blue' }
// ]

// matchGloves(gloves3) // []

// const gloves4 = [
//   { hand: 'L', color: 'green' },
//   { hand: 'L', color: 'red' },
//   { hand: 'R', color: 'red' },
//   { hand: 'R', color: 'green' }
// ]

// matchGloves(gloves4) // ['red', 'green']

/**
 * @param {{ hand: 'L' | 'R', color: string }[]} gloves
 * @returns {string[]} Colors of matched pairs
 */

const matchGloves = (gloves) => {
  const match = [];
  const counts = {};

  for (const { hand, color } of gloves) {
    counts[color] = counts[color] || { L: 0, R: 0 };
    counts[color][hand] += 1;

    if (counts[color].L > 0 && counts[color].R > 0) {
      counts[color].L -= 1;
      counts[color].R -= 1;
      match.push(color);
    }
  }

  return match;
};

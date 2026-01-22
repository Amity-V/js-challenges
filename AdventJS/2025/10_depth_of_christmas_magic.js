// 🎄 Depth of Christmas Magic

// At the North Pole, Santa Claus is reviewing the magical letters 📩✨ he receives from children all over the world. These letters use an ancient Christmas language in which the brackets [ and ] represent the intensity of the wish.

// The deeper the nesting of the brackets, the stronger the wish. Your mission is to find out the maximum depth at which the [] are nested.

// But be careful! Some letters may be poorly written. If the brackets are not properly balanced (if one closes before it opens, there are extra closing brackets, or closing brackets are missing), the letter is invalid and you must return -1.

// maxDepth('[]') // -> 1
// maxDepth('[[]]') // -> 2
// maxDepth('[][]') // -> 1
// maxDepth('[[][]]') // -> 2
// maxDepth('[[[]]]') // -> 3
// maxDepth('[][[]][]') // -> 2

// maxDepth('][') // -> -1 (closes before opening)
// maxDepth('[[[') // -> -1 (missing closing brackets)
// maxDepth('[]]]') // -> -1 (extra closing brackets)
// maxDepth('[][][') // -> -1 (one remains unclosed)

/**
 * @param {string} s - The string to check
 * @returns {number} The maximum depth of the magic
 */

const maxDepth = (s) => {
  let max = 0;
  let current = 0;

  for (const bracket of s) {
    if (bracket === "[") {
      current += 1;
    } else {
      current -= 1;
    }

    if (current < 0) return -1;

    if (current > max) max = current;
  }

  return current === 0 ? max : -1;
};

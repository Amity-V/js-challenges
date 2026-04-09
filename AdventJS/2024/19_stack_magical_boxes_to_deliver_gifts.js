// The day to give out gifts is approaching! We need to stack the gifts we will transport on the sleigh 🛷, and for that, we are going to put them in boxes 📦.

// The gifts can be placed in 4 different boxes, where each box can hold weights of 1, 2, 5, and 10, represented as follows:
//     _
// 1: |_|
//     _____
// 2: |_____|
//     _____
// 5: |     |
//    |_____|

// _________
// 10: |         |
//     |_________|

// // JavaScript representation:
// const boxRepresentations = {
//   1: [" _ ", "|_|"] ,
//   2: [" ___ ", "|___|"],
//   5: [" _____ ", "|     |", "|_____|"],
//   10: [" _________ ", "|         |", "|_________|"]
// }

// Your mission is, upon receiving the weight of the gifts, to use the fewest boxes possible and also stack them from less weight (top) to more weight (bottom). Always aligned to the left.

// Additionally, keep in mind that when stacking them, the lower edge of the box is reused.

// distributeWeight(1)
// // Returns:
// //  _
// // |_|

// distributeWeight(2)
// // Returns:
// //  ___
// // |___|

// distributeWeight(3)
// // Returns:
// //  _
// // |_|_
// // |___|

// distributeWeight(4)
// // Returns:
// //  ___
// // |___|
// // |___|

// distributeWeight(5)
// // Returns:
// //  _____
// // |     |
// // |_____|

// distributeWeight(6)
// // Returns:
// //  _
// // |_|___
// // |     |
// // |_____|

// Note: Be careful with the white spaces! Do not add whitespace to the right of a box unless necessary.

/**
 * @param {number} weight - Total weight of the gifts
 * @returns {string} - Stacked boxes represented as ASCII art
 */

function distributeWeight(weight) {
  const boxSizes = [10, 5, 2, 1];
  const boxCounts = { 10: 0, 5: 0, 2: 0, 1: 0 };
  const boxWidths = { 1: 3, 2: 5, 5: 7, 10: 11 };
  const boxRepresentations = {
    1: [" _ ", "|_|"],
    2: [" ___ ", "|___|"],
    5: [" _____ ", "|     |", "|_____|"],
    10: [" _________ ", "|         |", "|_________|"],
  };

  let remaining = weight;
  for (const size of boxSizes) {
    while (remaining >= size) {
      boxCounts[size] += 1;
      remaining -= size;
    }

    if (remaining === 0) break;
  }

  const lines = [];
  let prevSize = null;

  for (const size of boxSizes.reverse()) {
    for (let i = 0; i < boxCounts[size]; i += 1) {
      if (prevSize && prevSize < size) {
        const extension = boxWidths[size] - boxWidths[prevSize] - 1;
        lines[lines.length - 1] += "_".repeat(extension);
      }

      const isFirstBox = lines.length === 0;
      const boxLines = boxRepresentations[size].slice(isFirstBox ? 0 : 1);
      lines.push(boxLines.join("\n"));

      prevSize = size;
    }
  }

  return lines.join("\n");
}

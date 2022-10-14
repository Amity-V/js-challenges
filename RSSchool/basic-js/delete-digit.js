/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */

// function deleteDigit(n) {
//   const stringNum = String(n);
//   const numArr = stringNum.split("").map((_, i) => {
//     const stringNumCopy = stringNum.split("").slice();
//     stringNumCopy.splice(i, 1);
//     return stringNumCopy.join("");
//   });
//   const result = Math.max(...numArr);

//   return result;
// }

const deleteDigit = (n) =>
  Math.max(
    ...String(n)
      .split("")
      .map((_, index) =>
        String(n)
          .split("")
          .filter((_, i) => i !== index)
          .join("")
      )
  );

module.exports = {
  deleteDigit,
};

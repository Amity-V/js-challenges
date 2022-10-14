/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  const splittedStr = str.split("");
  let result = "";
  let currentChars = "";

  splittedStr.map((char, i) => {
    currentChars += char;

    if (!splittedStr[i + 1] || char !== splittedStr[i + 1]) {
      result += `${currentChars.length > 1 ? currentChars.length : ""}${char}`;
      currentChars = "";
    }
  });

  return result;
}

module.exports = {
  encodeLine,
};

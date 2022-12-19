/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */

function getFizzBuzz(num) {
  if (!(num % 3) && !(num % 5)) return "FizzBuzz";
  if (!(num % 5)) return "Buzz";
  if (!(num % 3)) return "Fizz";
  return num;
}

/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */

function getFactorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * getFactorial(n - 1);
}

/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */

function getSumBetweenNumbers(n1, n2) {
  if (n1 === n2) {
    return n2;
  }

  return n1 + getSumBetweenNumbers(n1 + 1, n2);
}

/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */

function findFirstSingleChar(str) {
  const chars = str.split("");
  const result = chars.find((char) => {
    const reps = chars.filter((c) => c === char);
    return reps.length === 1;
  });

  return result;
}

/**
 * Returns the string representation of math interval,
 * specified by two points and include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */

function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  const start = isStartIncluded ? "[" : "(";
  const end = isEndIncluded ? "]" : ")";
  const nums = a < b ? `${a}, ${b}` : `${b}, ${a}`;

  return start + nums + end;
}

/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */

function reverseString(str) {
  const chars = str.split("");
  const result = [];

  chars.forEach((char) => {
    result.unshift(char);
  });

  return result.join("");
}

/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */

function reverseInteger(num) {
  const nums = String(num).split("");
  const reversedNums = [];

  nums.forEach((n) => {
    reversedNums.unshift(n);
  });

  return Number(reversedNums.join(""));
}

/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */

function getDigitalRoot(num) {
  const sum = num
    .toString()
    .split("")
    .reduce((prev, current) => Number(prev) + Number(current));
  const result =
    sum < 10
      ? sum
      : sum
          .toString()
          .split("")
          .reduce((prev, current) => Number(prev) + Number(current));
  return result;
}

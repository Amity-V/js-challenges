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

/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true
 */

function isBracketsBalanced(str) {
  const brackets = {
    "{": "}",
    "[": "]",
    "(": ")",
    "<": ">",
  };

  const chars = str.split("");

  while (chars.length > 0) {
    if (!(chars[0] in brackets)) {
      return false;
    }

    const cBracketIndex = chars.findIndex((char) => !(char in brackets));
    const prevBracket = chars[cBracketIndex - 1];

    if (cBracketIndex > 0 && brackets[prevBracket] === chars[cBracketIndex]) {
      chars.splice(cBracketIndex - 1, 2);
    } else {
      return false;
    }
  }

  return true;
}

/**
 * Returns the common directory path for specified array of full filenames.
 *
 * @param {array} paths
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/verbalizer/logs'] => '/'
 */

function getCommonDirectoryPath(paths) {
  let commonPath = "";

  const splittedPaths = paths.map((path) => path.split("/"));

  for (let i = 0; i < splittedPaths[0].length; i += 1) {
    const current = splittedPaths[0][i];
    let failed = false;

    splittedPaths.forEach((path) => {
      if (path[i] !== current) {
        failed = true;
      }
    });

    if (!failed) {
      commonPath += `${current}/`;
    }
  }

  return commonPath;
}

/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */

function evaluateTicTacToePosition(position) {
  let horizontal;
  let vertical;
  let diagonal;

  for (let i = 0; i < 3; i += 1) {
    let line;

    for (let j = 0; j < 3; j += 1) {
      if (!vertical && i === 0 && position[i][j]) {
        let row = position[i][j];

        for (let k = 0; k < 3; k += 1) {
          if (!position[k][j] || position[k][j] !== row) {
            row = undefined;
            break;
          }
        }

        vertical = row;
      }

      if (!diagonal && i === 0 && j === 0 && position[0][0]) {
        let diagonalUD = position[0][0];

        for (let k = 1; k < 3; k += 1) {
          if (position[k][k] !== diagonalUD) {
            diagonalUD = undefined;
            break;
          }
        }

        diagonal = diagonalUD;
      }

      if (!diagonal && i === 2 && j === 0 && position[2][0]) {
        let diagonalDU = position[2][0];

        for (let k = 1; k < 3; k += 1) {
          if (position[i - k][k] !== diagonalDU) {
            diagonalDU = undefined;
            break;
          }
        }

        diagonal = diagonalDU;
      }

      if (!horizontal) {
        if (j === 0 && position[i][j]) {
          line = position[i][j];
        } else if (position[i][j] !== line) {
          line = undefined;
          break;
        }
      }
    }

    if (!horizontal) {
      horizontal = line;
    }
  }

  return horizontal || vertical || diagonal;
}

/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 *
 *  (5;5)
 *     -------------
 *     |           |
 *     |           |  height = 10
 *     -------------
 *        width=20
 *
 * NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 *
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 *
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *
 */

function doRectanglesOverlap(rect1, rect2) {
  return !(
    rect1.top > rect2.top + rect2.height ||
    rect2.top > rect1.top + rect1.height ||
    rect1.left > rect2.left + rect2.width ||
    rect2.left > rect1.left + rect1.width
  );
}

/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 */

function isCreditCardNumber(ccn) {
  const splittedCCN = String(ccn).split("");
  let result = 0;

  splittedCCN.forEach((d, i) => {
    const n = Number(d);
    let digit;

    if (i % 2) {
      digit = splittedCCN.length % 2 ? n * 2 : n;
    } else {
      digit = splittedCCN.length % 2 ? n : n * 2;
    }

    result += digit > 9 ? 1 + (digit % 10) : digit;
  });

  return (10 - (result % 10)) % 10 === 0;
}

/**
 * Returns the string with n-ary (binary, ternary, etc, where n <= 10)
 * representation of specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */

function toNaryString(num, n) {
  return num.toString(n);
}

/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */

function getMatrixProduct(m1, m2) {
  const result = [];

  m1.forEach((line, i) => {
    result.push([]);
    for (let j = 0; j < line.length; j += 1) {
      for (let k = 0; k < m2[i].length; k += 1) {
        if (result[i][k]) {
          result[i][k] += line[j] * m2[j][k];
        } else {
          result[i][k] = line[j] * m2[j][k];
        }
      }
    }
  });

  return result;
}

/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of
 *  {
 *     center: {
 *       x: 5,
 *       y: 5
 *     },
 *     radius: 20
 *  }
 *
 * Point is object of
 *  {
 *     x: 5,
 *     y: 5
 *  }
 *
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *
 */

function isInsideCircle(circle, point) {
  const distance = Math.sqrt(
    (point.x - circle.center.x) ** 2 + (point.y - circle.center.y) ** 2
  );

  return distance < circle.radius;
}

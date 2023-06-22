// Link: https://www.codewars.com/kata/5884731139a9b4b7a8000002/javascript

/*

When a candle finishes burning it leaves a leftover. makeNew leftovers can be
combined to make a new candle, which, when burning down, will in turn leave
another leftover.

You have candlesNumber candles in your possession. What's the total number of
candles you can burn, assuming that you create new candles as soon as you have
enough leftovers?

Example

For candlesNumber = 5 and makeNew = 2, the output should be 9.

Here is what you can do to burn 9 candles:

    burn 5 candles, obtain 5 leftovers;
    create 2 more candles, using 4 leftovers (1 leftover remains);
    burn 2 candles, end up with 3 leftovers;
    create another candle using 2 leftovers (1 leftover remains);
    burn the created candle, which gives another leftover (2 leftovers in total);
    create a candle from the remaining leftovers;
    burn the last candle.
    Thus, you can burn 5 + 2 + 1 + 1 = 9 candles, which is the answer.

Input/Output

[input] integer candlesNumber

    The number of candles you have in your possession.
    Constraints: 1 ≤ candlesNumber ≤ 50.

[input] integer makeNew

    The number of leftovers that you can use up to create a new candle.
    Constraints: 2 ≤ makeNew ≤ 5.

[output] an integer

*/

const candles = (candlesNumber, makeNew, leftovers = 0) => {
  const newCandles = Math.floor((candlesNumber + leftovers) / makeNew);
  leftovers = (candlesNumber + leftovers) % makeNew;

  if (newCandles === 0 && leftovers < makeNew) {
    return candlesNumber;
  }

  return candlesNumber + candles(newCandles, makeNew, leftovers);
};

console.log(candles(5, 2)); // 9
console.log(candles(1, 2)); // 1
console.log(candles(3, 3)); // 4
console.log(candles(11, 3)); // 16

/* Top 3 solutions: (sorted by best practices)

===

const candles = (candlesNumber, makeNew) =>
  candlesNumber + --candlesNumber / --makeNew ^ 0;

===

function candles(c, n) {
  let r = c, x;
  while(c >= n) {
    x = c / n | 0;
    r += x;
    c = x + c % n;
  }
  return r;
}

===

function candles(candles, makeNew, left = candles) {  
    while (left >= makeNew) {    
        let newCandle = ~~(left / makeNew);
        left = left % makeNew;
        candles += newCandle;
        left += newCandle;   
    }
    return candles;  
}

*/

// Link: https://www.codewars.com/kata/588425ee4e8efb583d000088

/*

Some phone usage rate may be described as follows:

first minute of a call costs min1 cents,
each minute from the 2nd up to 10th (inclusive) costs min2_10 cents
each minute after 10th costs min11 cents.
You have s cents on your account before the call. What is the durationof the
longest call (in minutes rounded down to the nearest integer) you can have?

Example

For min1 = 3, min2_10 = 1, min11 = 2 and s = 20, the output should be

    phoneCall(min1, min2_10, min11, s) === 14

Here's why:

the first minute costs 3 cents, which leaves you with 20 - 3 = 17 cents;
the total cost of minutes 2 through 10 is 1 * 9 = 9, so you can talk 9 more minutes
    and still have 17 - 9 = 8 cents;
each next minute costs 2 cents, which means that you can talk 8 / 2 = 4 more minutes.
Thus, the longest call you can make is 1 + 9 + 4 = 14 minutes long.

Input/Output
    
[input] integer min1
    
    Constraints: 1 ≤ min1 ≤ 10

[input] integer min2_10

    Constraints: 1 ≤ min2_10 ≤ 10

[input] integer min11

    Constraints: 1 ≤ min11 ≤ 10

[input] integer s
    
    Constraints: 2 ≤ s ≤ 100

[output] an integer

*/

const phoneCall = (min1, min2_10, min11, s) => {
  if (s < min1) return 0;

  s -= min1;

  if (s < min2_10 * 9) return 1 + Math.floor(s / min2_10);

  s -= min2_10 * 9;

  return 10 + Math.floor(s / min11);
};

console.log(phoneCall(3, 1, 2, 20)); // 14
console.log(phoneCall(2, 2, 1, 2)); // 1
console.log(phoneCall(10, 1, 2, 22)); // 11
console.log(phoneCall(2, 2, 1, 24)); // 14
console.log(phoneCall(1, 2, 1, 6)); // 3

/* Top 3 solutions: (sorted by best practices)

===

const phoneCall = (min1, min2_10, min11, s) =>
  s < min1
    ? 0
    : s < min1 + min2_10 * 9
    ? (1 + (s - min1) / min2_10) ^ 0
    : (10 + (s - min1 - min2_10 * 9) / min11) ^ 0;

===

function phoneCall(min1, min2_10, min11, s) {
  if (s < min1) return 0;
  else if (s < min1 + min2_10) return 1;
  else if (s < min1 + 9 * min2_10) return 1 + ~~((s - min1) / min2_10);
  else return 10 + ~~((s - min1 - 9 * min2_10) / min11);
}

===

function phoneCall(m1, m2, m11, s, count = 1) {
  const price = {
    1: m1,
    2: m2,
    3: m2,
    4: m2,
    5: m2,
    6: m2,
    7: m2,
    8: m2,
    9: m2,
    10: m2,
  };
  while (s > 0) {
    s = count < 11 ? s - price[count] : s - m11;
    if (s == 0) return count;
    if (s < 0) return --count;
    count++;
  }
}

*/

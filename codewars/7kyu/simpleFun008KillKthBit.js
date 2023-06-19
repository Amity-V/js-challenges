// Link: https://www.codewars.com/kata/58844f1a76933b1cd0000023/javascript

/*

In order to stop the Mad Coder evil genius you need to decipher the encrypted
message he sent to his minions. The message contains several numbers that, when
typed into a supercomputer, will launch a missile into the sky blocking out the
sun, and making all the people on Earth grumpy and sad.

You figured out that some numbers have a modified single digit in their binary
representation. More specifically, in the given number n the kth bit from the
right was initially set to 0, but its current value might be different. It's now
up to you to write a function that will change the kth bit of n back to 0.

Example

For n = 37 and k = 3, the output should be 33.

37 = 100101 ~> 100001 = 33

For n = 37 and k = 4, the output should be 37.

The 4th bit is 0 already (looks like the Mad Coder forgot to encrypt this number),
so the answer is still 37.

Input/Output

[input] integer n

    Constraints: 0 ≤ n ≤ 231 - 1.

[input] integer k

    The 1-based index of the changed bit (counting from the right).
    Constraints: 1 ≤ k ≤ 31.

[output] an integer

More Challenge
Are you a One-Liner? Please try to complete the kata in one line(no test for it) ;-)

*/

const killKthBit = (n, k) =>
  parseInt(
    [...n.toString(2)]
      .map((num, i, arr) => (i === arr.length - k ? "0" : num))
      .join(""),
    2
  );

console.log(killKthBit(37, 3)); // 33
console.log(killKthBit(37, 4)); // 37
console.log(killKthBit(0, 4)); // 0
console.log(killKthBit(2147483647, 16)); // 2147450879
console.log(killKthBit(374823748, 13)); // 374819652
console.log(killKthBit(1084197039, 15)); // 1084197039

/* Top 3 solutions: (sorted by best practices)

===

function killKthBit(n, k) {
  return n & ~(1 << k - 1);
}

===

const killKthBit = (n, k) =>
  parseInt(
    n.toString(2).replace(/./g, (x, i, a) => (i === a.length - k ? "0" : x)),
    2
  );

===

function killKthBit(n, k) {
  let bi = n.toString(2).split("");
  bi[bi.length - k] = "0";
  return parseInt(bi.join(""), 2);
}

*/

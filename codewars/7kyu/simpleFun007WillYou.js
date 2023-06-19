// Link: https://www.codewars.com/kata/58844a13aa037ff143000072/javascript

/*

Once Mary heard a famous song, and a line from it stuck in her head. That line
was "Will you still love me when I'm no longer young and beautiful?". Mary
believes that a person is loved if and only if he/she is both young and beautiful,
but this is quite a depressing thought, so she wants to put her belief to the test.

Knowing whether a person is young, beautiful and loved, find out if they contradict
Mary's belief.

A person contradicts Mary's belief if one of the following statements is true:

    they are young and beautiful but not loved;
    they are loved but not young or not beautiful.

Example

For young = true, beautiful = true and loved = true, the output should be false.

Young and beautiful people are loved according to Mary's belief.

For young = true, beautiful = false and loved = true, the output should be true.

Mary doesn't believe that not beautiful people can be loved.

Input/Output

    [input] boolean young
    [input] boolean beautiful
    [input] boolean loved
    [output] a boolean value
        true if the person contradicts Mary's belief, false otherwise.

*/

const willYou = (young, beautiful, loved) =>
  loved ? !young || !beautiful : young && beautiful;

// they are young and beautiful but not loved;
// they are loved but not young or not beautiful.

console.log(willYou(true, true, true)); // false
console.log(willYou(true, false, true)); // true
console.log(willYou(false, false, false)); // false
console.log(willYou(false, false, true)); // true

/* Top 3 solutions: (sorted by best practices)

===

function willYou(young, beautiful, loved) {
  return (young && beautiful) !== loved;
}

===

const willYou = (young, beautiful, loved) =>
  !!(young & beautiful ^ loved);

===

let willYou = (young, beautiful, loved) => (young && beautiful) ? !loved : loved

*/

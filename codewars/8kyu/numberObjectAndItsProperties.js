// Link:

/*

Coding in function whatNumberIsIt. function accept 1 parameter:n. it's a number.

To judge the number n. If n is one of the above five constants, return one of these string:

    "Input number is Number.MAX_VALUE"
    "Input number is Number.MIN_VALUE"
    "Input number is Number.NaN"
    "Input number is Number.NEGATIVE_INFINITY"
    "Input number is Number.POSITIVE_INFINITY"

Other values should return "Input number is xxx". xxx means this number.

For example:

    whatNumberIsIt(1/0) should return "Input number is Number.POSITIVE_INFINITY"
    whatNumberIsIt(100) should return "Input number is 100"

What you need to think about is how to judge it correctly and effectively and don't
forget isNaN().

*/

const whatNumberIsIt = (n) => {
  if (isNaN(n)) return "Input number is Number.NaN";
  if (n === Number.MAX_VALUE) return "Input number is Number.MAX_VALUE";
  if (n === Number.MIN_VALUE) return "Input number is Number.MIN_VALUE";
  if (n === Number.NEGATIVE_INFINITY)
    return "Input number is Number.NEGATIVE_INFINITY";
  if (n === Number.POSITIVE_INFINITY)
    return "Input number is Number.POSITIVE_INFINITY";
  return `Input number is ${n}`;
};

/* Top 3 solutions: (sorted by best practices)

===

function whatNumberIsIt(n){
  switch (true) {
    case (n==Number.MAX_VALUE): return "Input number is Number.MAX_VALUE";
    case (n==Number.POSITIVE_INFINITY): return "Input number is Number.POSITIVE_INFINITY";
    case (n==Number.MIN_VALUE): return "Input number is Number.MIN_VALUE";
    case (n==Number.NEGATIVE_INFINITY): return "Input number is Number.NEGATIVE_INFINITY";
    case (isNaN(n)): return "Input number is Number.NaN";
    default: return "Input number is " + n;
  }
}

===

function whatNumberIsIt(n){
  const CHOICES = Object.getOwnPropertyNames(Number);
  let choice = CHOICES.filter(a => n === Number[a]).join('');
  return `Input number is ${(choice ? `Number.${choice}` : isNaN(n) ? 'Number.NaN' : n)}`;
}

===

function whatNumberIsIt(n) {
  return `Input number is ${
    isNaN(n)
      ? "Number.NaN"
      : n == Number.MAX_VALUE
      ? "Number.MAX_VALUE"
      : n == Number.MIN_VALUE
      ? "Number.MIN_VALUE"
      : n > Number.MAX_VALUE
      ? "Number.POSITIVE_INFINITY"
      : n < Number.MIN_VALUE
      ? "Number.NEGATIVE_INFINITY"
      : n
  }`;
}

*/

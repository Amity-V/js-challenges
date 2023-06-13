// Link: https://www.codewars.com/kata/5732d3c9791aafb0e4001236

/*

Coding in function roundIt. function accept 1 parameter n. It's a number with a
decimal point. Please use different methods based on the location of the decimal
point, turn the number into an integer.

If the decimal point is on the left side of the number (that is, the count of
digits on the left of the decimal point is less than that on the right), Using
ceil() method.

    roundIt(3.45) should return 4

If the decimal point is on the right side of the number (that is, the count of
digits on the left of the decimal point is more than that on the right), Using
floor() method.

    roundIt(34.5) should return 34

If the decimal point is on the middle of the number (that is, the count of digits
on the left of the decimal point is equals that on the right), Using round() method.

    roundIt(34.56) should return 35

*/

const roundIt = (n) => {
  const lnr = String(n).split(".");
  const l = lnr[0].length;
  const r = lnr[1].length;
  const method = l < r ? "ceil" : l > r ? "floor" : "round";

  return Math[method](n);
};

console.log(roundIt(3.45)); // 4
console.log(roundIt(34.5)); // 34
console.log(roundIt(34.56)); // 35

/* Top 3 solutions: (sorted by best practices)

===

function roundIt(n) {
  var [a, b] = n.toString().split(".");
  return a.length > b.length
    ? Math.floor(n)
    : a.length === b.length
    ? Math.round(n)
    : Math.ceil(n);
}

===

function roundIt(n) {
    var [a, b] = String(n).split('.').map(s => s.length);
    if (a < b) return Math.ceil(n);
    if (a > b) return Math.floor(n);
    return Math.round(n);
}

===

function roundIt (n) {
    
    let [left, right] = n.toString().split('.').map(x => x.length),
        dx = left - right,
        fn = dx < 0 ? Math.ceil : dx > 0 ? Math.floor : Math.round
        
    return fn(n)
}

*/

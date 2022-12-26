// Link: https://www.codewars.com/kata/57238ceaef9008adc7000603

/*

Coding in function colorOf. function accept 3 parameter:r g b. It means value of color
red green and blue. the value range is 0-255.

Use toString(16) Convert numbers r g b to hex string form. at last, combine them to a
web color code and return it.

the color code should starting with "#". and then use 2 characters per color.

for example:

    colorOf(255,0,0) should return "#ff0000"
    colorOf(0,111,0) should return "#006f00"
    colorOf(1, 2 ,3) should return "#010203"

*/

const colorOf = (r, g, b) => {
  const hR = r.toString(16).length > 1 ? r.toString(16) : "0" + r.toString(16);
  const hG = g.toString(16).length > 1 ? g.toString(16) : "0" + g.toString(16);
  const hB = b.toString(16).length > 1 ? b.toString(16) : "0" + b.toString(16);

  return `#${hR}${hG}${hB}`;
};

/* Top 3 solutions: (sorted by best practices)

===

function colorOf(r,g,b)
{
   return "#" + toHex(r)+ toHex(g)+ toHex(b);  
}

function toHex(n)
{
  var result = n.toString(16);
  return result.length == 1 ? "0" + result : result;  
}

===

function colorOf(r,g,b){
  return '#'+r.toString(16).padStart(2,0)+g.toString(16).padStart(2,0)+b.toString(16).padStart(2,0);
}

===

const colorOf = (...rgb) => '#' + rgb.map(x => `0${x.toString(16)}`.slice(-2)).join('')

*/

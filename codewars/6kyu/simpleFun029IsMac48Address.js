// Link: https://www.codewars.com/kata/5886faac54a7111c21000072/javascript

/*

A media access control address (MAC address) is a unique identifier assigned to
network interfaces for communications on the physical network segment.

The standard (IEEE 802) format for printing MAC-48 addresses in human-friendly
form is six groups of two hexadecimal digits (0 to 9 or A to F), separated by
hyphens (e.g. 01-23-45-67-89-AB).

Example

For inputString = "00-1B-63-84-45-E6", the output should be true;

For inputString = "Z1-1B-63-84-45-E6", the output should be false;

For inputString = "not a MAC-48 address", the output should be false.

Input/Output

[input] string inputString

[output] a boolean value

    true if inputString corresponds to MAC-48 address naming rules, false otherwise.

*/

const isMAC48Address = (inputString) => {
  if (inputString.length !== 17) return false;

  const regExp = /[0-9]|[a-f]/i;

  return inputString.split("-").every((pair) => {
    let [a, b] = pair;

    a = isNaN(a) ? a : +a;
    b = isNaN(b) ? b : +b;

    return regExp.test(a) && regExp.test(b);
  });
};

console.log(isMAC48Address("00-1B-63-84-45-E6")); // true
console.log(isMAC48Address("Z1-1B-63-84-45-E6")); // false
console.log(isMAC48Address("not a MAC-48 address")); // false
console.log(isMAC48Address("FF-FF-FF-FF-FF-FF")); // true
console.log(isMAC48Address("00-00-00-00-00-00")); // true
console.log(isMAC48Address("G0-00-00-00-00-00")); // false
console.log(isMAC48Address("12-34-56-78-9A-BC")); // true
console.log(isMAC48Address("02-03-04-05-06-07-")); // false

/* Top 3 solutions: (sorted by best practices)

===

function isMAC48Address(inputString) {
  return /^([\dA-F]{2}-){6}$/.test(inputString + "-");
}

===

const isMAC48Address = (s) => /^([0-9a-f]{2}-){5}[0-9a-f]{2}$/i.test(s);

===

function isMAC48Address(inputString) {
  inputString = inputString.split("-");
  if (inputString.length === 6) {
    for (var i = 0; i < 6; i++) {
      var group = inputString[i];
      if (verify(group) === false) return false;
    }
    return true;
  }
  return false;
}
function verify(group) {
  if (group.length === 2) {
    for (var i = 0; i < group.length; i++)
      if (group.charAt(i) < "A" || group.charAt(i) > "F")
        if (isNaN(group.charAt(i))) return false;
    return true;
  }
  return false;
}

*/

// Link: https://www.codewars.com/kata/573fb9223f9793e485000453

/*

Your task is coding in function addCommas. Function accepts 2 parameters
money and reg. money is a string, it only contains "$" and numbers. To
avoid someone being lazy, so you should defined a regular expression
outside function, its name should be regex. It will passed to the function
as parameter reg. You can write code that uses this regular expression in
the function, such as using replace() or other methods.

Examples

    addCommas("$123",regex) should return "$123"
    addCommas("$1234",regex) should return "$1,234"
    addCommas("$12345",regex) should return "$12,345"
    addCommas("$1234567",regex) should return "$1,234,567"
    addCommas("$123456789",regex) should return "$123,456,789"

*/

const regex = /(\d)(?=(\d{3})+$)/g;

const addCommas = (money, reg) => {
  return money.replace(reg, (x) => x + ",");
};

console.log(addCommas("$123", regex)); // "$123"
console.log(addCommas("$1234", regex)); // "$1,234"
console.log(addCommas("$12345", regex)); // "$12,345"
console.log(addCommas("$1234567", regex)); // "$1,234,567"
console.log(addCommas("$123456789", regex)); // "$123,456,789"

/* Top 3 solutions: (sorted by best practices)

===

const regex = /\d(?=(\d{3})+$)/g;

===

const regex = /\d{1,3}(?=(\d{3})+$)/g;

===

const regex = /(?<=\d)(?=(?:...)+$)/g;

*/

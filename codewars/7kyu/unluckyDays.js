// Link: https://www.codewars.com/kata/unlucky-days

/*

Friday 13th or Black Friday is considered as unlucky day.
Calculate how many unlucky days are in the given year.

Find the number of Friday 13th in the given year.

Input: Year in Gregorian calendar as integer.
Output: Number of Black Fridays in the year as an integer.

    unluckyDays(2015) == 3
    unluckyDays(1986) == 1

*/

const unluckyDays = (year) => {
  let unlucky = 0;

  for (let i = 0; i < 12; i += 1) {
    if (new Date(year, i, 13).getDay() === 5) {
      unlucky += 1;
    }
  }

  return unlucky;
};

console.log(unluckyDays(1586)); // 1
console.log(unluckyDays(1001)); // 3
console.log(unluckyDays(2819)); // 2
console.log(unluckyDays(2792)); // 2
console.log(unluckyDays(2723)); // 2
console.log(unluckyDays(1909)); // 1
console.log(unluckyDays(1812)); // 2
console.log(unluckyDays(1618)); // 2
console.log(unluckyDays(2132)); // 1
console.log(unluckyDays(2065)); // 3

/* Top 3 solutions: (sorted by best practices)

===

function unluckyDays(year){
  let unlucky = 0;
  for (var i = 0; i < 12; i++) {
    if(new Date(year, i, 13).getDay() === 5){
      unlucky++;
    }
  }
  return unlucky;
}

===

function unluckyDays(year){
  var date = new Date(year,0,13), count = 0;
  for(let i=0; i<12; i++) {
    date.setMonth(i);
    if(date.getDay()===5)count++;
  }
  return count;
}

===

function unluckyDays(year){
  return Array.from({ length: 12 }).filter((_, i) => new Date(year, i, 13).getDay() === 5).length
}

*/

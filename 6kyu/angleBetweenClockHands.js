// Link: https://www.codewars.com/kata/angle-between-clock-hands

/*

Given a Date, return the angle between the two hands of a 12-hour analog clock in radians.

Notes:

    The minute hand always points to the exact minute (there is no seconds hand).
    The hour hand does not "snap" to the tick marks: e.g. at 6:30 the angle is not 0
        because the hour hand is already half way between 6 and 7.
    Return the smaller of the angles ( <= π ).
    Return π if the hands are opposite. 

Examples:

    at noon the angle is: 0
    at 3:00 the angle is: π/2 (90 degrees)
    at 6:00 the angle is: π (180 degrees)
    at 9:00 the angle is: π/2 (90 degrees)

*/

const handAngle = (date) => {
  const d = new Date(date);
  const pi = Math.PI;
  const hourDeg = (360 / 12) * d.getHours() + (360 / 12 / 60) * d.getMinutes();
  const minuteDeg = (360 / 60) * d.getMinutes();

  const min = Math.min(hourDeg, minuteDeg);
  const max = Math.max(hourDeg, minuteDeg);

  const resultDeg = max - min > 180 ? 360 - max + min : max - min;
  const resultRad = (pi / 180) * resultDeg;

  return (!(resultRad % pi) && resultRad > pi) || !resultRad
    ? 0
    : !(resultRad % pi)
    ? pi
    : resultRad;
};

console.log(handAngle("2022-10-05T00:00:00")); // 0
console.log(handAngle("2022-10-05T12:00:00")); // 0
console.log(handAngle("2022-10-05T06:00:00")); // 3.141592653589793
console.log(handAngle("2022-10-05T01:00:00")); // 0.5235987755982988
console.log(handAngle("2022-10-05T00:30:00")); // 2.8797932657906435
console.log(handAngle("2022-10-05T09:00:00")); // 1.5707963267948966
console.log(handAngle("2022-10-05T10:00:00")); // 1.0471975511965976
console.log(handAngle("2022-10-05T00:45:00")); // 1.9634954084936207

/* Top 3 solutions: (sorted by best practices)

===

function handAngle (date) {
  var pi2 = Math.PI*2;
  var m = date.getMinutes()/60, h = (date.getHours()+m)/12;
  
  var angle = Math.abs(h-m)*pi2;
  return Math.min( angle, pi2-angle )

}

===

function handAngle(date) {
  let angle = Math.abs((date.getHours() % 12) * 30 + date.getMinutes() / 2 - date.getMinutes() * 6);
  if (angle > 180) {
    angle = 360 - angle;
  }
  return angle / 180 * Math.PI;
}

===

function handAngle (date) {
  a = Math.abs(11*date.getMinutes()/720 - date.getHours()/12)
  return 2*Math.PI*Math.min(1 - a, a)
}

*/

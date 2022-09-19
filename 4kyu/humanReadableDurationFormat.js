// Link: https://www.codewars.com/kata/human-readable-duration-format

/*

Your task in order to complete this Kata is to write a function which
formats a duration, given as a number of seconds, in a human-friendly way.

The function must accept a non-negative integer. If it is zero, it just
returns "now". Otherwise, the duration is expressed as a combination of
years, days, hours, minutes and seconds.

It is much easier to understand with an example:

    * For seconds = 62, your function should return 
        "1 minute and 2 seconds"
    * For seconds = 3662, your function should return
        "1 hour, 1 minute and 2 seconds"

For the purpose of this Kata, a year is 365 days and a day is 24 hours.

Note that spaces are important.

Detailed rules:

The resulting expression is made of components like 4 seconds, 1 year, etc.
In general, a positive integer and one of the valid units of time, separated
by a space. The unit of time is used in plural if the integer is greater than 1.

The components are separated by a comma and a space (", "). Except the last
component, which is separated by " and ", just like it would be written in English.

A more significant units of time will occur before than a least significant one.
Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

Different components have different unit of times. So there is not repeated units
like in 5 seconds and 1 second.

A component will not appear at all if its value happens to be zero. Hence, 1 minute
and 0 seconds is not valid, but it should be just 1 minute.

A unit of time must be used "as much as possible". It means that the function should
not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration
specified by of a component must not be greater than any valid more significant
unit of time.

*/

const formatDuration = (seconds) => {
  let rest = seconds;
  let index = 0;

  if (seconds === 0) {
    return "now";
  }

  const timeArr = [
    ["year", 31536000],
    ["day", 86400],
    ["hour", 3600],
    ["minute", 60],
    ["second", 1],
  ];

  for (const [_, value] of timeArr) {
    if (rest % value !== rest) {
      timeArr[index][1] = Math.floor(rest / value);

      rest = rest % value;
    } else {
      timeArr[index][1] = 0;
    }

    index += 1;
  }

  const resultArr = timeArr.filter((time) => time[1]);

  return resultArr
    .map((arr, index) => {
      const length = resultArr.length;
      const isPlural = arr[1] === 1 ? "" : "s";
      const construction = `${arr[1]} ${arr[0]}${isPlural}`;

      return length > 1 && index === length - 1
        ? ` and ${construction}`
        : length > 1 && index !== 0
        ? `, ${construction}`
        : construction;
    })
    .join("");
};

console.log(formatDuration(1)); // "1 second"
console.log(formatDuration(62)); // "1 minute and 2 seconds"
console.log(formatDuration(120)); // "2 minutes"
console.log(formatDuration(3600)); // "1 hour"
console.log(formatDuration(3662)); // "1 hour, 1 minute and 2 seconds"

/* Top 3 solutions: (sorted by best practices)

===

function formatDuration (seconds) {
  var time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 },
      res = [];

  if (seconds === 0) return 'now';
  
  for (var key in time) {
    if (seconds >= time[key]) {
      var val = Math.floor(seconds/time[key]);
      res.push(val += val > 1 ? ' ' + key + 's' : ' ' + key);
      seconds = seconds % time[key];
    }
  }
 
  return res.length > 1 ? res.join(', ').replace(/,([^,]*)$/,' and'+'$1') : res[0]
}

===

function formatDuration (seconds) {
  if(!seconds)return "now";
  var strout = "";
  var s = seconds%60;
  seconds = (seconds-s)/60;
  var m = seconds%60;
  seconds = (seconds-m)/60;
  var h = seconds%24;
  seconds = (seconds-h)/24;
  var d = seconds%365;
  seconds = (seconds-d)/365;
  var y = seconds;
  
  var english=[];
  if(y)english.push(y+" year"+(y>1?'s':''));
  if(d)english.push(d+" day"+(d>1?'s':''));
  if(h)english.push(h+" hour"+(h>1?'s':''));
  if(m)english.push(m+" minute"+(m>1?'s':''));
  if(s)english.push(s+" second"+(s>1?'s':''));
  
  return english.join(", ").replace(/,([^,]*)$/," and$1");
  
}

===

var formatDuration = (function () {

  return function formatDuration (seconds) {
    return [{name: 'year',   size: 365 * 24 * 60 * 60 * 1},
            {name: 'day',    size:       24 * 60 * 60 * 1},
            {name: 'hour',   size:            60 * 60 * 1},
            {name: 'minute', size:                 60 * 1},
            {name: 'second', size:                      1}].
            reduce(parse, { parts: [], seconds: seconds }).
            parts.
            reduce(join, 'now');
  };
  
  function parse (result, part) {
    var quantity = Math.floor(result.seconds / part.size);
    if (quantity > 0) {
      result.seconds -= quantity * part.size;
      result.parts.push(quantity + ' ' + part.name + (quantity == 1 ? '' : 's'));
    }
    return result;
  }
  
  function join (result, part, index, arr) {
    switch (index) {
      case 0: return part;
      case arr.length - 1: return result + ' and ' + part;
      default: return result + ', ' + part;
    }
  }
  
}());

*/

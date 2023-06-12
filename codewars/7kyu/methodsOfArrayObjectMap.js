// Link: https://www.codewars.com/kata/572fdeb4380bb703fc00002c

/*

Coding in function isolateIt. function accept 1 parameters arr, it's a string
array. Your task is to put a character "|" into the middle of each element.

If the string length is an even number, use the insert method. for example:
"abcd" should became "ab|cd". "|" should be inserted between ab and cd.

If the string length is an odd number, use the replacement method. for example:
"abcde" should became "ab|de". Character c will be replaced by |.

The original array should not be changed, you need to return a new array(if you
    use the map method, you do not need to worry about this).

Example

    isolateIt(["abcd","efgh"]) should return ["ab|cd","ef|gh"]
    isolateIt(["abcde","fghij"]) should return ["ab|de","fg|ij"]
    isolateIt(["1234","56789"]) should return ["12|34","56|89"]

a little hint: Flexible use of slice() Will make the work more simple.

*/

const isolateIt = (arr) => {
  const result = [];

  arr.map((str) => {
    const newStr = str.split("");
    const indexOfCenter = newStr.length / 2;

    if (newStr.length % 2 === 0) {
      newStr.splice(indexOfCenter, 0, "|");
    } else {
      newStr.splice(Math.floor(indexOfCenter), 1, "|");
    }

    result.push(newStr.join(""));
  });

  return result;
};

console.log(isolateIt(["abcd", "efgh"])); // ["ab|cd","ef|gh"]
console.log(isolateIt(["abcde", "fghij"])); // ["ab|de","fg|ij"]
console.log(isolateIt(["1234", "56789"])); // ["12|34","56|89"]

/* Top 3 solutions: (sorted by best practices)

===

function isolateIt(arr){
  return arr.map(s=>s.slice(0,s.length/2)+"|"+s.slice(-s.length/2));
}

===

function isolateIt(arr){
  var array = arr.map(function(item){
    var itemLength = item.length;
  
    if(itemLength % 2 === 0) {
     return item.slice(0,itemLength/2) + "|" + item.slice(itemLength/2);
    } else {
      return item.slice(0,itemLength/2) + "|" + item.slice(itemLength/2 +1);
    } 

  });
  return array;
}

===

function isolate(s) {
  const len = s.length;
  const m = Math.floor(len / 2);
  if (len % 2 == 0)
    return s.substr(0, m) + '|' + s.substr(m, m);
  else
    return s.substr(0, m) + '|' + s.substr(m+1, m);
}

function isolateIt(arr) {
  return arr.map(isolate);
}

*/

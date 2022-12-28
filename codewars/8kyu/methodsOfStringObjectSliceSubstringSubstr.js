// Link: https://www.codewars.com/kata/57274562c8dcebe77e001012

/*

Coding in function cutIt, function accept 1 parameter:arr. arr is a string array.

The first mission: Traversing arr, find the shortest string length.

The second mission: Traversing arr again, intercept all strings to the shortest string
length(Start from index0). you can use one of slice() substring() or substr() do it.
return the result after finished the work.

for example:

    cutIt(["ab","cde","fgh"]) should return ["ab","cd","fg"]
    cutIt(["abc","defgh","ijklmn"]) should return ["abc","def","ijk"]
    cutIt(["codewars","javascript","java"]) should return ["code","java","java"]

*/

const cutIt = (arr) => {
  const shrt = arr.slice().sort((a, b) => {
    if (a.length < b.length) return -1;
    else if (a.length > b.length) return 1;
    return 0;
  })[0];
  return arr.map((str) => str.slice(0, shrt.length));
};

/* Top 3 solutions: (sorted by best practices)

===

function cutIt(arr){
  const minLength = Math.min(...arr.map(x => x.length));
  return arr.map(x => x.slice(0, minLength));
}

===

function cutIt(arr) {
  var smallest = arr[0].length;
  for(var i = 0; i < arr.length; i++) {
    if(arr[i].length < smallest) {
      smallest = arr[i].length;
    }
  }
  var map = arr.map(function(x) {
    return x.slice(0, smallest);
  });
  return map;
};

===

const cutIt = arr =>
  arr.map(val => val.slice(0, Math.min(...arr.map(val => val.length))));

*/

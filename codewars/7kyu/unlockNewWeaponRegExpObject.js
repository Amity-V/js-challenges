// Link: https://www.codewars.com/kata/5735e39313c205fe39001173

/*

Coding in function countAnimals. function accept two parameters: animals,
a string contains some animals; count, an array list of which animals we
should count. The result should be a number array.

Examples

    countAnimals("dog,cat",["dog","cat"]); //=> [1,1]
    countAnimals("dog,cat",["dog","cat","pig"]); //=> [1,1,0]
    countAnimals("dog,dog,cat",["dog","cat"]); //=> [2,1]
    countAnimals("dog,dog,cat",["pig","cow"]); //=> [0,0]

*/

const countAnimals = (animals, count) =>
  count.map((animal) => (animals.match(new RegExp(animal, "g")) || []).length);

console.log(countAnimals("dog,cat", ["dog", "cat"])); // [1,1]
console.log(countAnimals("dog,cat", ["dog", "cat", "pig"])); // [1,1,0]
console.log(countAnimals("dog,dog,cat", ["dog", "cat"])); // [2,1]
console.log(countAnimals("dog,dog,cat", ["pig", "cow"])); // [0,0]

/* Top 3 solutions: (sorted by best practices)

===

const countAnimals = (animals,count) => count.map(x => animals.split(x).length - 1);

===

function countAnimals(animals,count) {
  let result = [];
  
  for (let i of count) {
    result.push(animals.split(i).length - 1);
  }
  
  return result;
}

===

function countAnimals(animals,count){
  var res = [];
  count.map(a=>res.push(animals.split(a).length-1));
  return res;
}

*/

// Link: https://www.codewars.com/kata/walk-the-object-path

/*

Implement the method find which takes in an two parameters object and path.
The path will be a period-delimited string of properties that we will use to
traverse through our object to find our target value.

Edge Cases And Further Consideration

    Be sure to handle passing array indices. For example, if we have an object:
    { people: ['John', 'Dave', 'Lisa'] } and the path is 'people.1', the target
    value is 'Dave' which is the string at position 1 inside of the people array.

    Also this method should handle invalid paths. If we have an object 
    { user: { name: 'Dan' } } and the path is 'user.wallet.money', we 
    should return undefined. Valid paths are exclusive to properties on
    the object which are not inherited, in other words it is specific to
    this object and does not need to look up the prototype chain.

*/

// v1:
// const find = (object, path) => {
//   for (const piece of path.split(".")) {
//     if (object.hasOwnProperty(piece)) {
//       object = object[piece];
//     } else {
//       return undefined;
//     }
//   }

//   return object;
// };

// v2:
const find = (object, path) => {
  for (const piece of path.split(".")) {
    object = object && object.hasOwnProperty(piece) ? object[piece] : undefined;
  }

  return object;
};

console.log(find({ people: ["John", "Dave", "Lisa"] }, "people.1")); // 'Dave'
console.log(find({ user: { name: "Dan" } }, "user.wallet.money")); // undefined
console.log(find({ user: { name: { first: "John", last: "Snow" } } }, "user.name.first")); // 'John'

/* Top 3 solutions: (sorted by best practices)

===

function find(object, path) {
  
  return path.split('.').reduce(function(acc, pathName){
    return (acc && acc.hasOwnProperty(pathName)) ? acc[pathName] : undefined;
  },object);
  
}

===

function find(object, path) {
  let arrPath = path.split('.')
  
  for(let item of arrPath) {
    if(object.hasOwnProperty(item)) {
      object = object[item]
    } else {
      object = undefined
      break
    }
  }

  return object
}

===

function find(object, path) {
    let pathArray = path.split('.');
    let temp = object[pathArray[0]];
    for (let i = 1; i < pathArray.length; i++) {
        (temp != undefined) ? temp = searchRecursion(temp, i) : undefined;
    }
    function searchRecursion(object, i) {
        return (typeof object === 'object') ? object[pathArray[i]] : undefined;
    }
    return temp;
}

*/

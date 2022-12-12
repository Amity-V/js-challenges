// Link: https://www.codewars.com/kata/image-host-filename-generator

/*

You are developing an image hosting website.
You have to create a function for generating random and unique image filenames.
Create a function for generating a random 6 character string which will be usedto access
the photo URL.
To make sure the name is not already in use, you are given access to an PhotoManager object.
You can call it like so to make sure the name is unique

    // at this point, the website has only one photo, hosted on the 'ABCDEF' url
    photoManager.nameExists('ABCDEF'); // returns true
    photoManager.nameExists('BBCDEF'); // returns false

Note: We consider two names with same letters but different cases to be unique.

*/

function generateName() {
  let str = "";

  for (let i = 0; i < 6; i += 1) {
    str += Math.floor(Math.random() * 10);
  }

  if (photoManager.nameExists(str)) {
    return generateName();
  }

  return str;
}

/* Top 3 solutions: (sorted by best practices)

===

function generateName(){
  function * randomNames() {
    const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    while (true) {
      yield Array(6).fill(0).map(ch => alpha[Math.floor(Math.random() * 52)]).join('');
    }
  }
  let name = randomNames().next().value;
  return photoManager.nameExists(name) ? generateName() : name;
}

===

let i = 60466175
let generateName = () => (++i).toString(36)

===

const generateName = () =>
  Math.random()
    .toString(36)
    .slice(2,8)

*/

// Link: https://www.codewars.com/kata/5733f948d780e27df6000e33

/*

Coding in function cutCube. function accept 2 parameter: volume and n.
volume is the volume of a cube. If we cut the cube into n block. please
determine whether the length of the cube is an integer. return true or false.

For exmaple:

volume=27, it can be divided into 27 blocks, each small cube side length is 1

    cutCube(27,27) should return true

volume=512, it can be divided into 8 blocks, each small cube side length is 4

    cutCube(512,8) should return true

volume=512, it can be divided into 64 blocks, each small cube side length is 2

    cutCube(512,64) should return true

If the side length of small cube is not a integer, should return false.

    cutCube(256,8) should return false
    cutCube(27,3) should return false
    cutCube(123,456) should return false

If it can't be divided evenly into n small cubes, should return false too.

    cutCube(50000,50) should return false
    cutCube(256,4) should return false

The two examples above seems to meet our requirements, but please note: a cube
is unable to evenly divided into 50 pieces or 4 pieces. Only cubic numbers(such
as 8,27,64,125,216...) can be used to divide the cube evenly.

*/

const cutCube = (volume, n) => {
  const isIntCbrt = (x) => Number.isInteger(Math.cbrt(x));

  return isIntCbrt(volume / n) && isIntCbrt(n);
};

console.log(cutCube(27, 27)); // true
console.log(cutCube(512, 8)); // true
console.log(cutCube(512, 64)); // true
console.log(cutCube(256, 8)); // false
console.log(cutCube(27, 3)); // false
console.log(cutCube(123, 456)); // false
console.log(cutCube(50000, 50)); // false
console.log(cutCube(256, 4)); // false

/* Top 3 solutions: (sorted by best practices)

===

function cutCube(volume,n){
  return !(Math.cbrt(n) % 1) && !(Math.cbrt(volume / n) % 1);
}

===

const cutCube = (volume, n) =>
  (fn => fn(n) && fn(volume / n))
  (val => Number.isInteger(Math.cbrt(val)));

===

function cutCube(volume,n){
    return [volume/n, n].map(Math.cbrt).every(x=> x==~~x)
}

*/

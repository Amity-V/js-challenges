// Link: https://www.codewars.com/kata/fun-with-es6-classes-number-4-cubes-and-setters

/*

In Fun with ES6 Classes #3 - Cuboids, Cubes and Getters, we learned that if we knew all
the dimensions (i.e. length, width, height) of a cuboid, we could easily work out its
corresponding volume and surface area. The way we achieved this in our code was by the
use of getters which automatically computed the volume and surface area of the cuboid
whenever either one of length, width, height changed. However, in the previouos exercise,
one thing we could not do is define setters for surface area or volume of a cuboid because
for a given volume/SA, there were an infinite number of possibilities to the dimensions of
the cuboid.

However, for cubes (a special type of cuboid), since their length, width and height are
always the same, it is possible to figure out the side length of a cube given its surface
area and/or volume. Therefore, in this Kata, you will be asked to define setters as well
as getters for both the surface area and volume of a cube.

    Task:

Define a class Cube whose constructor function takes exactly one parameter length and
stores the value of the argument into this.length. You will then define both a getter
and a setter for the surfaceArea and volume of the cube.

No initial code will be given. You are free to use whatever syntax you like to complete
this Kata but it is highly recommended that you use ES6 syntax and features to complete
this Kata.

    Articles of Interest:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set
http://stackoverflow.com/questions/28222276/what-are-getters-and-setters-for-in-ecmascript-6-classes
http://exploringjs.com/es6/ch_classes.html

*/

class Cube {
  constructor(length) {
    this.__length = length;
    this.__area = length ** 2 * 6;
    this.__volume = length ** 3;
  }

  set surfaceArea(area) {
    this.__area = area;
    this.__length = Math.sqrt(area / 6);
    this.__volume = this.__length ** 3;
  }

  get surfaceArea() {
    return this.__area;
  }

  set volume(vol) {
    this.__volume = vol;
    this.__length = Math.cbrt(vol);
    this.__area = this.__length ** 2 * 6;
  }

  get volume() {
    return this.__volume;
  }

  set length(length) {
    this.__length = length;
    this.__area = length ** 2 * 6;
    this.__volume = length ** 3;
  }

  get length() {
    return this.__length;
  }
}

/* Top 3 solutions: (sorted by best practices)

===

class Cube {
  constructor(length){
    this.length = length;
  }
  get volume() {
    return Math.pow(this.length, 3);
  }
  set volume(volume){
    this.length = Math.cbrt(volume);
  }
  get surfaceArea() {
    return 6 * Math.pow(this.length, 2);
  }
  set surfaceArea(surfaceArea){
    this.length = Math.sqrt(surfaceArea / 6);
  }
}

===

class ES6Cube {
    constructor(n) {
      this._length = n,
      this._surfaceArea = n * n * 6,
      this._volume = n * n * n;
    }
    get length() {
        return this._length
    }
    set length(n) {
        this._length = n,
        this._surfaceArea = n * n * 6,
        this._volume = n * n * n;
    }
    get surfaceArea() {
        return this._surfaceArea
    }
    set surfaceArea(n) {
        this._length = Math.sqrt(n / 6),
        this._surfaceArea = n,
        this._volume = Math.pow(this._length, 3);
    }
    get volume() {
        return this._volume
    }
    set volume(n) {
        this._length = Math.pow(n, 1 / 3),
        this._surfaceArea = this._length * this._length * 6,
        this._volume = n;
    }
}

===

class Cube {
  constructor(length) { this.length = length };
  
  get surfaceArea() { return Math.pow(this.length, 2) * 6 };
  
  set surfaceArea(value) { this.length = Math.sqrt(value / 6) };
  
  get volume() { return Math.pow(this.length, 3) };
  
  set volume(value) { this.length = Math.cbrt(value) };
}

*/

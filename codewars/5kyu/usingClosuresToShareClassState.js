// Link: https://www.codewars.com/kata/using-closures-to-share-class-state

/*

In object-oriented programming, it is sometimes useful to have private shared state among
all instances of a class; in other languages, like ruby, this shared state would be tracked
with a class variable. In javascript we achieve this through closures and immediately-invoked
function expressions.

In this kata, I want you to write make a Cat constructor that takes arguments name and weight
to instantiate a new cat object. The constructor should also have an averageWeight method that
returns the average weight of cats created with the constructor.

    garfield = new Cat('garfield', 25);
    Cat.averageWeight(); // 25

    felix = new Cat('felix', 15);
    Cat.averageWeight();   // now 20

But that's not all. Cats can change weight. Use Object.defineProperty to write custom setters
and getters for the weight property so that the following works properly even as instances
change their weight value:

    felix.weight = 25;
    felix.weight // 25
    Cat.averageWeight(); // now 25

Object.defineProperty must be used to pass all tests. Storing a reference to all instances
and recalculating the average weight each time is easier, but would prevent garbage collection
from working properly if used in a production environment.

Finally, since average weight is an aggregate statistic it's important that we validate
constructor arguments so that no cats are created without a specified weight; so, make sure
to throw an error if both arguments are not recieved by the constructor.

    Summary of requirements:

1. Cat constructor, requiring arguments for name and weight
2. Throw an error if name or weight not specified when invoking the constructor.
3. Cat.averageWeight() method should give the average weight of all cat instances created
    with Cat, even after if the instance's properties have changed.
4. Must use Object.defineProperty

*/

var Cat = (function () {
  const cats = [];

  return class Cat {
    constructor(name, weight) {
      if (!name || !weight) throw Error();

      Object.defineProperty(this, "weight", {
        get: () => this._weight,
        set: (weight) => (this._weight = weight),
      });

      this._name = name;
      this._weight = weight;

      cats.push(this);
    }

    static averageWeight() {
      let sum = 0;

      cats.forEach((cat) => {
        sum += cat._weight;
      });

      return sum / cats.length;
    }
  };
})();

/* Top 3 solutions: (sorted by best practices)

===

var Cat = (function () {
  var cats = {
    count: 0,
    totalWeight: 0,
    avgWeight: 0
  }
  
  function Cat (name, weight) {
    if (!name || !weight) {
      throw new Error('Both `name` and `weight` should be provided');
    }
    cats.count++;
    this.name = name;

    Object.defineProperty(this, 'weight', {
      get: function () {
        return this._weight || 0;
      },
      set: function (val) {
        cats.totalWeight = cats.totalWeight - this.weight + val;
        cats.avgWeight =  cats.totalWeight / cats.count;
        return this._weight = val;
      }
    });

    this.weight = weight;
  }
  
  Cat.averageWeight = function () {
    return cats.avgWeight;
  }
  
  return Cat;
  
}());

===

var Cat = (function () {
  var cats = [];
  var constructor = function (name, weight) {
    if (typeof name == "undefined" || typeof weight == "undefined") {
      throw Error("Must specify a name and a weight");
    }
    Object.defineProperty(this, 'name', {
      get: function () { return name }
    });
    Object.defineProperty(this, 'weight', {
      get: function () { return weight },
      set: function (x) { weight = x; return weight }
    });
    cats.push(this);
  };
  constructor.averageWeight = function() {
    return cats.reduce(function (sum, cat) { return sum + cat.weight }, 0) / cats.length;
  };
  return constructor;
}());

===

// not best practice:
var Cat = (function() {
//   closure variable, use map since animals are unique
  let weights = new Map();
  
//   constructor function to return immediately
  function inner(name, weight) {
//     if no name or weight the cat dont exist
    if (!name || !weight) throw 'error';
    this.name = name;
    this.weight = weight;
    weights.set(name, weight);
    
//     define set/get and update closure variable
    Object.defineProperty(this, 'weight', {
      set(val) {
        weight = val;
        weights.set(name, val);
      },
      get() {
        return weight
      }
    });
  }
  
//   define "static" method  to get average
//   needs to be in closure to acces closure var
  inner.averageWeight = () => {
    let sum = 0;
    weights.forEach((val, key, map) => sum += val) 
    return  sum / weights.size;
  }
  
//   pray 🙏 that reading stack overflow made it work ⚒
  return inner;
})();


// or...
// best practice:
const Dog = (function() {
//   still need closure 😟
  let weights = new Map();
  
//   🐕 = ♥
  return class BestestFriend {
  constructor(name, weight) {
    if (!name || !weight) throw 'it dont exist??'
    this.name = name;
    this._weight = weight;
    weights.set(name, weight);
  }
    
  static averageWeight() {
    let sum = 0;
    weights.forEach((val, key, map) => sum += val) 
    return  sum / weights.size;
  }
    
//  Soon ™ 🙏
//  static weights = new Map();
    
  set weight(val) {
    this._weight = val;
    weights.set(this.name, val);
  }
    
  get weight() {
    return this._weight;
  }
}
})();

// in conclusion it is obvious that dogs are better

*/

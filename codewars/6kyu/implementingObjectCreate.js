// Link: https://www.codewars.com/kata/implementing-object-dot-create

/*

    BRIEFING

Greetings, warrior! In this kata you will learn, how Object.create method does its job.
First over, what does it do? The signature of Object.create is like this:

    //throws TypeError
    //returns newly created object
    Object.create(prototype, [properties])

Object.create serves to create new object that inherits given prototype and has properties
being defined by "properties" parameter set on it. Parameters values must meet following
requirements:

    prototype parameter should be some object1 (i.e. a non-primitive value) or null (but
        not undefined!). If bad value passed for prototype, error TypeError must be thrown.
    properties parameter can be of any type or omitted at all.

As a result of execution, Object.create will return a newly created object with inner property
[[Prototype]]2 set to value of prototype parameter. If properties parameter is passed and is
not undefined, then Object.create will make call Object.defineProperties(obj,properties),
where obj is the object to be returned byObject.create.

    OBJECTIVES

In absence of the original Object.create create your own implementation of it that acts
like the original one and assign it to the Object.create. To access inner [[Prototype]]
property of object use its __proto__ property2.

Your implementation will be used like this:

    var citizen = {
    sleep: function(){ return "zzZ..."; },
    panic: function(){ return "AaAaAaAa!"; }
    };

    var veteran = Object.create(citizen,{
            panic: {
            value: function(){
                return "SNAFU";
            }
            }
        });

    INFORMATION

1. Formal description of Object.create function in ECMAScript 5.1: http://es5.github.io/#x15.2.3.5
2. Prototype-based inheritance description in ECMAScript 5.1 http://es5.github.io/#x4.2.1

    "In JavaScript everything is object, except these:"

    null
    undefined
    number literals (42, 3.14, -1, NaN, Infinity, etc.)
    string literals ("", "dan", "abnormal termination", etc.)
    boolean literals (true, false)

    "But /regular expression literals/, function(){} — they all are actually objects."

    "Inner property stands for a property, that cannot be accessible through language
    constructs. But [[prototype]] is an exception and is acessible in "Google Chrome
    Browser", its "V8" JavaScript Engine, and here at codewars (it uses "V8" too) — with
    use of __proto__ property (readable and writable)."

*/

Object.create = function (prototype, properties) {
  if (properties !== undefined) {
    return Object.defineProperties(
      Object.setPrototypeOf({}, prototype),
      properties
    );
  }
  return Object.setPrototypeOf({}, prototype);
};

/* Top 3 solutions: (sorted by best practices)

===

Object.create = function(prototype, properties) {
  if(prototype === undefined) throw new TypeError;
  var obj = new Object;
  obj.__proto__ = prototype;
  if(properties !== undefined){
    Object.defineProperties(obj, properties);
  }
  return obj;
};

===

Object.create = function (prototype, properties = {}) {
  if (typeof prototype !== "object") throw new TypeError();
  return Object.defineProperties({__proto__: prototype}, properties);
};

===

Object.create = function(prototype, properties) {
  if (typeof prototype != 'object' && prototype !== null) throw new TypeError;
  var obj = { __proto__: prototype };
  if (typeof properties != 'undefined') Object.defineProperties(obj, properties);
  return obj;
};

*/

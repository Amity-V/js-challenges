// Link: https://www.codewars.com/kata/array-number-reduce

/*

In this kata, you must define the Array.reduce method.

I have disabled the pre-existing reduce methods.

Here's how it works:

    [1,2,3].reduce( function(sum, next){return sum+next}, 0) 
    // => 6

    ["a", "b", "a"].reduce(function (obj, elem) {
        if (!obj[elem]) obj[elem] = 0;
        obj[elem] += 1;
        return obj;
    }, {});
    // => {'a':2, 'b':1}    

Summary: The reduce method goes through each element of an array, applies the function
to whatever the function returned last, and returns the last outcome. On the first
iteration, it should pass the initial value to the function, as well as the first
element of the array. If no initial value is passed, skip to the first element of
the array.

Ruby methods should expect a lambda.

*/

Array.prototype.reduce = function (process, initial) {
  let init = initial === undefined ? this[0] : initial;

  this.forEach((el, i) => {
    if (!(initial === undefined && i === 0)) {
      init = process(init, el);
    }
  });

  return init;
};

/* Top 3 solutions: (sorted by best practices)

===

Array.prototype.reduce = function(process, initial) {
  var reduction;
  if(initial == undefined){
    reduction = this[0];
    for(var i = 1; i < this.length; i++){
      reduction = process(reduction, this[i]);
    }
  } else {
    reduction = initial;
    for(var i = 0; i < this.length; i++){
      reduction = process(reduction, this[i]);
     }
  }
  return reduction;
}

===

Array.prototype.reduce = function(process, initial) {
  var init = {'string': '', 'number': 0}[typeof(this[0])];
  this.forEach(function(e, i) {
    initial = process(initial || init, e, i, this);
  });
  return initial;
}

===

Array.prototype.reduce = function(process, memo = this.shift()) {
  this.forEach( (e) => memo = process(memo, e) );
  return memo;
}

*/

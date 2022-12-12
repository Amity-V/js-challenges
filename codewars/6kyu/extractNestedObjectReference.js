// Link: https://www.codewars.com/kata/extract-nested-object-reference

/*

You are given a complex object that has many deeply nested variables. You don't want
to go the usual if obj.property == null route. Create a prototype method that given a
nested path, either return the value or undefined.

    var obj = {
        person: {
            name: 'joe',
            history: {
                hometown: 'bratislava',
                bio: {
                    funFact: 'I like fishing.'
                }
            }
        }
    };

    obj.hash('person.name'); // 'joe'
    obj.hash('person.history.bio'); // { funFact: 'I like fishing.' }
    obj.hash('person.history.homeStreet'); // undefined
    obj.hash('person.animal.pet.needNoseAntEater'); // undefined

*/

// return the nested property value if it exists,
// otherwise return undefined

Object.prototype.hash = function (string) {
  let result;

  try {
    result = eval(`this.${string}`);
  } catch (_) {
    result = undefined;
  }

  return result;
};

/* Top 3 solutions: (sorted by best practices)

===

Object.prototype.hash = function(string) {
  var arr = string.split('.');
  return arr.reduce(function(pv, cv){
    return (pv) ? pv[cv] : pv;
  }, this);
}

===

Object.prototype.hash = function(string) {
  var obj = this;
  string.split(".").forEach(function(el) { 
    try {
      obj = obj[el];
    }
    catch(e) { 
      obj = undefined;
    }
  });
  return obj;
}

===

Object.prototype.hash = function(s) {
   s = s.split('.');
   let o = this;
   for (let i=0; o && i<s.length; i++) 
     o = o[s[i]] ;
   return o;
}

*/

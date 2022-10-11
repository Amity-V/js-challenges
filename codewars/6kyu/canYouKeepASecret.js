// Link: https://www.codewars.com/kata/can-you-keep-a-secret

/*

There's no such thing as private properties on a coffeescript object! But, maybe there are?

Implement a function createSecretHolder(secret) which accepts any value as secret and
returns an object with ONLY two methods

    getSecret() which returns the secret
    setSecret() which sets the secret

    obj = createSecretHolder(5)
    obj.getSecret() # returns 5
    obj.setSecret(2)
    obj.getSecret() # returns 2

*/

const createSecretHolder = (secret) => {
    return {
        secret,
        getSecret: function() {
            return this.secret;
        },
        setSecret: function(secret) {
            this.secret = secret;
        }
    }
}

const obj = createSecretHolder(5);
console.log(obj.getSecret()); // 5

obj.setSecret(2);
console.log(obj.getSecret()); // 2
  
/* Top 3 solutions: (sorted by best practices)

===

function createSecretHolder(secret) {
  return {
    getSecret: function() { return secret; },
    setSecret: function(v) { secret = v; }
  };
}

===

function createSecretHolder(secret) {
  var _secret = secret;
  return {
    setSecret: function(s) {
      _secret = s;
    },
    getSecret: function() {
      return _secret;
    }
  };
}

===

function createSecretHolder(secret) {
  return {
    getSecret: () => secret,
    setSecret: (s) => secret = s
  };
}

*/

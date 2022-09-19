// Link: https://www.codewars.com/kata/handshake-problem

/*

Johnny is a farmer and he annually holds a beet farmers convention "Drop the beet".

Every year he takes photos of farmers handshaking. Johnny knows that no two 
farmers handshake more than once. He also knows that some of the possible handshake
combinations may not happen.

However, Johnny would like to know the minimal amount of people that participated
this year just by counting all the handshakes.

Help Johnny by writing a function, that takes the amount of handshakes and returns
the minimal amount of people needed to perform these handshakes (a pair of farmers
handshake only once).

*/

const getParticipants = (handshakes) => {
  let maxHandshakes = 0;
  let participants = 0;

  for (let i = 0; i < Infinity; i += 1) {
    if (handshakes <= maxHandshakes) {
      return participants;
    } else {
      participants += 1;

      for (let j = 1; j < participants; j++) {
        maxHandshakes += 1;
      }
    }
  }
};

console.log(getParticipants(0)); // 0
console.log(getParticipants(1)); // 2
console.log(getParticipants(3)); // 3
console.log(getParticipants(6)); // 4
console.log(getParticipants(7)); // 5

/* Top 3 solutions: (sorted by best practices)

===

function getParticipants(handshakes){
  let farmers = 0
  while(handshakes > farmers * (farmers - 1) / 2){
    farmers++
  }
  return farmers
}

===

const getParticipants = (handshakes) =>
  handshakes > 0 ? Math.ceil((1 + (1 + 8 * handshakes) ** 0.5) / 2) : 1;

===

function getParticipants(handshakes){
    let x = handshakes
    let participants = 0
    while (x > 0) {
        x = x - participants
        participants++
    }
    return participants
}

*/

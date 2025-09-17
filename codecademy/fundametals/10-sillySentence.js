// Write a function, sillySentence(), that has 3 string parameters and
// returns the following silly sentence with the blanks filled in by the
// arguments passed into the function:

// I am so _adj_ because I _verb_ coding! Time to write some more awesome _noun_!

// Write your function here:

const sillySentence = (adj, verb, noun) =>
    `I am so ${adj} because I ${verb} coding! Time to write some more awesome ${noun}!`;

// Uncomment the line below when you're ready to try out your function
console.log(sillySentence('excited', 'love', 'functions'))

// Write a function, agreeOrDisagree(), that takes in two strings,
// and returns 'You agree!' if the two strings are the same and
// 'You disagree!' if the two strings are different.

// Write your function here:

const agreeOrDisagree = (string1, string2) =>
    string1 === string2 ? "You agree!" : "You disagree!";

// Uncomment the line below when you're ready to try out your function
console.log(agreeOrDisagree("yep", "yep")) // Should print 'You agree!'

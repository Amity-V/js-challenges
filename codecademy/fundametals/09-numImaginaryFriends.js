// A person’s number of imaginary friends are always 25% (or 1/4) of their total friends.

// Write a function, numImaginaryFriends(), that takes in the total number of friends a
// person has and returns the number of imaginary friends they have.

// Since friends can only come in whole numbers, be sure to round your result up to the
// nearest whole number before returning it.

// The JavaScript Math.ceil() function will come in handy. Check out the documentation
// here (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil)
// to figure out how it works.

// Write your function here:

const numImaginaryFriends = (friends) => Math.ceil(friends * 0.25);

// Uncomment the lines below when you're ready to try out your function
console.log(numImaginaryFriends(20)) // Should print 5
console.log(numImaginaryFriends(10)) // Should print 3 (2.5 rounded up!)
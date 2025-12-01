// In this lab you will create a function that removes all falsy values from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

// User Stories:

// 1. You should have a bouncer function that takes an array as argument.
// 2. The bouncer function should return a new array that contains the same elements as the array passed in as argument with the falsy elements removed.
// 3. The bouncer function should not change the array passed in as an argument.

// Hint: Try converting each value to a Boolean.

const bouncer = (arr) => arr.filter(item => !!item);

// Tests

// 1. You should have a bouncer function.
// 2. bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].
// 3. bouncer(["a", "b", "c"]) should return ["a", "b", "c"].
// 4. bouncer([false, null, 0, NaN, undefined, ""]) should return [].
// 5. bouncer([null, NaN, 1, 2, undefined]) should return [1, 2].
// 6. The bouncer function should not mutate the array passed in as argument.
// 7. bouncer([]) should return [].
// In this lab, you will build a function that returns an array consisting of the largest number from each provided sub-array.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

// Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

// User Stories:

// 1. You should create a function largestOfAll that takes an array of arrays as an argument.
// 2. The function should return an array containing the largest number from each sub-array.

const largestOfAll = (arr) => arr.map(subArray => Math.max(...subArray));

// Tests

// 1. You should create a function named largestOfAll.
// 2. largestOfAll should take a single parameter.
// 3. largestOfAll([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return an array.
// 4. largestOfAll([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return [27, 5, 39, 1001].
// 5. largestOfAll([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]) should return [9, 35, 97, 1000000].
// 6. largestOfAll([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]) should return [25, 48, 21, -3].
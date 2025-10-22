// In this lab, you will implement a function that checks if a string ends with the given target string.

// Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

// User Stories:

// 1. You should create a function named confirmEnding that takes two parameters: the string to check and the string to check against.
// 2. The function should return true if the first string ends with the second string, and false otherwise.
// 3. You should not use the .endsWith() method; instead, use one of the JavaScript substring methods to achieve this.

const confirmEnding = (str, target) => str.slice(-target.length) === target;

// Tests

// 1. You should create a function named confirmEnding.
// 2. confirmEnding should take 2 parameters.
// 3. confirmEnding("Bastian", "n") should return true.
// 4. confirmEnding("Congratulation", "on") should return true.
// 5. confirmEnding("Connor", "n") should return false.
// 6. confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") should return false.
// 7. confirmEnding("He has to give me a new name", "name") should return true.
// 8. confirmEnding("Open sesame", "same") should return true.
// 9. confirmEnding("Open sesame", "sage") should return false.
// 10. confirmEnding("Open sesame", "game") should return false.
// 11. confirmEnding("If you want to save our world, you must hurry. We don't know how much longer we can withstand the nothing", "mountain") should return false.
// 12. confirmEnding("Abstraction", "action") should return true.
// 13. Your code should not use the built-in method .endsWith() to solve the lab.
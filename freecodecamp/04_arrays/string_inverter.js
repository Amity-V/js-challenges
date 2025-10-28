// In this lab, you will build a simple string inverter that reverses the characters of a given string.

// For example, "hello" should become "olleh".

// Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

// User Stories:

// 1. You should create a function named reverseString that takes a string as an argument.
// 2. The function should return the reversed string.

const reverseString = (str) => str.split('').reverse().join('');

// Tests

// 1. You should have a function named reverseString.
// 2. reverseString should take a string as an argument.
// 3. reverseString("hello") should return a string.
// 4. reverseString("hello") should return the string olleh.
// 5. reverseString("Howdy") should return the string ydwoH.
// 6. reverseString("Greetings from Earth") should return the string htraE morf sgniteerG.
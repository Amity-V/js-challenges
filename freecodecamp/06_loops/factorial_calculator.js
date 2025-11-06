// A factorial is the product of an integer and all the integers below it. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120. In this lab, you will create a factorial calculator that takes a number from the user and calculates the factorial of that number.

// Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

// User Stories:

// 1. You should declare a variable num and assign it a number of your choice. The assigned number should be between 1 and 20 inclusive.
// 2. Create a function named factorialCalculator that takes a number as an argument and returns the factorial of that number.
// 3. Inside the function, declare a result variable and assign it the value of 1. Using a loop, loop through all numbers from 1 to the input number(inclusive) and for each number, multiply the result variable by the current number and assign the result to the result variable. You can choose to use either a for loop, while loop or do...while loop here.
// 4. You should call the factorialCalculator function with num as the argument and assign the result to the variable factorial.
// 5. You should store the final output in the format Factorial of [num] is [factorial] and assign it to the variable resultMsg.
// 6. You should output the value of resultMsg to the console.

const num = 13;

const factorialCalculator = (number) => {
    let result = 1;

    for (let i = 1; i <= number; i++) {
        result *= i;
    }

    return result;
}

const factorial = factorialCalculator(num);

const resultMsg = `Factorial of ${num} is ${factorial}`;

console.log(resultMsg);

// Tests

// 1. You should have a num variable.
// 2. You should assign a value to the num variable
// 3. The value of num should be between 1 and 20.
// 4. The num value should be a number.
// 5. You should have a function named factorialCalculator.
// 6. The factorialCalculator function should take a number as an argument.
// 7. The factorial of 5 should return 120.
// 8. The factorial of 7 should return 5040.
// 9. You should call your factorialCalculator function with the num variable as the argument.
// 10. You should define a factorial variable and assign the result of the factorialCalculator function to it.
// 11. Your factorialCalculator should produce the correct result.
// 12. Your resultMsg should contain a string in a format Factorial of [num] is [factorial].
// 13. You should output the value of resultMsg to the console.
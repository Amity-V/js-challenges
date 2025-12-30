// In this lab, you will build a calculator that takes a number and returns the sum of all prime numbers that are less than or equal to that number.

// Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

// User Stories:

// 1. You should have a sumPrimes function that accepts a number as an argument.
// 2. The sumPrimes function should return the sum of all prime numbers less than or equal to the provided number.
// 3. If the input number is less than 2, the function should return 0.

function sumPrimes(num) {
    let sum = 0;

    for (let i = 2; i <= num; i++) {
        let prime = true;

        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                prime = false;
                break;
            }
        }

        if (prime) sum += i;
    }

    return sum;
}

// Tests

// 1. You should have a sumPrimes function.
// 2. sumPrimes(10) should return 17.
// 3. sumPrimes(5) should return 10.
// 4. sumPrimes(2) should return 2.
// 5. sumPrimes(0) should return 0.
// 6. sumPrimes(977) should return 73156.
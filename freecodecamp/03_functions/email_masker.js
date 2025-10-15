// In this lab, you will mask the username part of an email address with asterisks. Masking is a term used to hide or replace sensitive information with asterisks or other characters.

// For example, if the email address was myEmail@email.com, then the masked email address will be m*****l@email.com.

// Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

// User Stories:

// Create a function named maskEmail that takes email as an argument.
// Inside the function, you should mask the email and append the domain name to it. Remember that you can use methods like slice, repeat, indexOf or even replace to help you.
// Outside the function, declare a variable named email to store the email address you want to mask.
// Call the maskEmail function with the email variable and output the result to the console.
// maskEmail("apple.pie@example.com") should return "a*******e@example.com".
// maskEmail("freecodecamp@example.com") should return "f**********p@example.com".
// maskEmail("info@test.dev") should return "i**o@test.dev".
// maskEmail("user@domain.org") should return "u**r@domain.org".

const maskEmail = (email) => {
    const atIndex = email.indexOf("@");
    const username = email.slice(0, atIndex);
    const domain = email.slice(atIndex);

    const firstChar = username[0];
    const lastChar = username[username.length - 1];
    const maskedMiddle = "*".repeat(username.length - 2);

    return firstChar + maskedMiddle + lastChar + domain;
}

const email = "info@test.dev";

console.log(maskEmail(email));

// Tests

// 1. You should define a function named maskEmail.
// 2. The maskEmail function should take a string, email as an argument.
// 3. Outside the function, you should have an email variable.
// 4. You should assign a valid email address to your email variable.
// 5. maskEmail("apple.pie@example.com") should return "a*******e@example.com".
// 6. maskEmail("freecodecamp@example.com") should return "f**********p@example.com".
// 7. maskEmail("info@test.dev") should return "i**o@test.dev".
// 8. maskEmail("user@domain.org") should return "u**r@domain.org".
// 9. Your maskEmail should produce the correct result.
// 10. You should log the output of calling maskEmail with email as argument.
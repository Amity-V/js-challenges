// In this lab, you'll practice using functions by building a random password generator.

// Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

// User Stories:

// You should create a function called generatePassword that takes a parameter, indicating the length of generated password. You can name the parameter whatever you like.
// Your function should return a string which represents a randomly generated password. You should use the following string and different Math methods to help you return a new string with random characters in it: ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*().
// You should define a variable called password and assign it the result of calling the generatePassword function with a numeric argument that represents the desired password length.
// You should have a console.log that logs a single string made by concatenating the message Generated password: and the password variable separated by a space.

const generatePassword = (length) => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let result = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        result += chars[randomIndex];
    }

    return result;
}


const password = generatePassword(8);

console.log(`Generated password: ${password}`);

// Tests

// 1. You should have a generatePassword function with a parameter. You can name the parameter whatever you like.
// 2. Your generatePassword function should return a string.
// 3. Your generatePassword function should return a new string that is the correct length.
// 4. Your function should return a randomly generated password with valid characters.
// 5. Your function should return a randomly generated password which contains more than one unique character.
// 6. Your function should return a new random string each time it is called.
// 7. You should have a password variable.
// 8. Your password variable should be a string.
// 9. You should call the generatePassword function with a numeric argument and store the returned password in the password variable.
// 10. You should log a single string combining Generated password: and the password separated by a single space using + or a template literal.
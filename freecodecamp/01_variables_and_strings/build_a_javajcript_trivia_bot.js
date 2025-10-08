// Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

// User Stories:

// You should log "Hello! I'm your coding fun fact guide!" to the console as a greeting message to the user.
// You should create three variables: botName, botLocation, and favoriteLanguage, that store the bot's name, where it's from, and its favorite coding language, respectively.
// You should log "My name is (botName) and I live on (botLocation)." to the console.
// You should log "My favorite programming language is (favoriteLanguage)." to the console.
// You should use let to create a codingFact variable and assign it a string that is a fun fact about your bot's favorite coding language and include the use of the favoriteLanguage variable.
// You should log the codingFact to the console.
// You should reassign the codingFact variable to a new fact about the bot's favorite language using the favoriteLanguage variable again.
// You should log the codingFact to the console again.
// You should reassign the codingFact variable again to another new fact about the bot's favorite language using the favoriteLanguage variable.
// You should log the codingFact to the console a third time.
// You should log "It was fun sharing these facts with you. Goodbye! - (botName) from (botLocation)." to the console as a farewell statement from the bot.

console.log("Hello! I'm your coding fun fact guide!");

const botName = "Alice";
const botLocation = "Wonderland";
const favoriteLanguage = "JavaScript";

console.log(`My name is ${botName} and I live on ${botLocation}.`);
console.log(`My favorite programming language is ${favoriteLanguage}.`);

let codingFact = `${favoriteLanguage} was originally created in just 10 days!`;
console.log(codingFact);

codingFact = `${favoriteLanguage} can be used for both frontend and backend development.`;
console.log(codingFact);

codingFact = `Despite its name, ${favoriteLanguage} has nothing to do with Java.`;
console.log(codingFact);

console.log(`It was fun sharing these facts with you. Goodbye! - ${botName} from ${botLocation}.`);

// Tests

// 1. You should log "Hello! I'm your coding fun fact guide!" to the console.
// 2. You should declare a botName variable. Double check for any spelling or casing errors.
// 3. Your botName variable should be a string.
// 4. You should declare a botLocation variable. Double check for any spelling or casing errors.
// 5. Your botLocation variable should be a string.
// 6. You should declare a favoriteLanguage variable. Double check for any spelling or casing errors.
// 7. Your favoriteLanguage variable should be a string.
// 8. You should log to the console "My name is (botName) and I live on (botLocation)." and add the variables to the string.
// 9. You should log to the console "My favorite programming language is (favoriteLanguage)." and add the variable to the string.
// 10. You should use let to declare a new variable codingFact.
// 11. You should give codingFact a value that includes favoriteLanguage.
// 12. You should log codingFact to the console.
// 13. You should assign a new value to codingFact that also contains favoriteLanguage, and log it to the console.
// 14. You should assign a value to codingFact for the third time that also contains favoriteLanguage, and log it to the console.
// 15. You should log to the console "It was fun sharing these facts with you. Goodbye! - (botName) from (botLocation)." and add the values of the variables.
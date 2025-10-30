// Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

// User Stories:

// 1. You should create an array named questions.
// 2. The questions array should contain at least five objects, each having the keys category, question, choices, and answer.
// 3. The category key should have the value of a string representing a question category.
// 4. The question key should have the value of a string representing a question.
// 5. The choices key should have the value of an array containing three strings, which are alternative answers to the question.
// 6. The answer key should have the value of a string, representing the correct answer to the question. Also, the value of answer should be included in the choices array.
// 7. You should have a function named getRandomQuestion that takes an array of questions as a parameter and returns a random question object from the array.
// 8. You should have a function named getRandomComputerChoice that takes the array of the available choices as a parameter, and returns a random answer to the selected question.
// 9. You should have a function named getResults that takes the question object as the first parameter and the computer's choice as the second parameter. The function should return The computer's choice is correct! if the answer is correct. Otherwise, it returns The computer's choice is wrong. The correct answer is: <correct-answer>, where <correct-answer> is the value of the correct answer to the chosen question.

const questions = [
    {
        category: "Animated Movies",
        question: "In 'Finding Nemo', what kind of fish is Nemo?",
        choices: ["Clownfish", "Goldfish", "Angelfish"],
        answer: "Clownfish"
    },
    {
        category: "Superhero Movies",
        question: "Which actor plays Iron Man in the Marvel Cinematic Universe?",
        choices: ["Chris Evans", "Robert Downey Jr.", "Chris Hemsworth"],
        answer: "Robert Downey Jr."
    },
    {
        category: "Pixar Classics",
        question: "What is the name of the cowboy toy in 'Toy Story'?",
        choices: ["Buzz Lightyear", "Woody", "Jessie"],
        answer: "Woody"
    },
    {
        category: "Disney Princesses",
        question: "In 'The Little Mermaid', what is the name of Ariel’s best friend who is a fish?",
        choices: ["Flounder", "Sebastian", "Scuttle"],
        answer: "Flounder"
    },
    {
        category: "Fantasy Films",
        question: "In 'Harry Potter', what house is Harry sorted into?",
        choices: ["Slytherin", "Gryffindor", "Ravenclaw"],
        answer: "Gryffindor"
    }
];

const getRandomQuestion = (questionsArray) => {
    const randomIndex = Math.floor(Math.random() * questionsArray.length);
    return questionsArray[randomIndex];
}

const getRandomComputerChoice = (choicesArray) => {
    const randomIndex = Math.floor(Math.random() * choicesArray.length);
    return choicesArray[randomIndex];
}

const getResults = (questionObj, computerChoice) => {
    if (computerChoice === questionObj.answer) {
        return "The computer's choice is correct!";
    } else {
        return `The computer's choice is wrong. The correct answer is: ${questionObj.answer}`;
    }
}

const randomQuestion = getRandomQuestion(questions);
const computerChoice = getRandomComputerChoice(randomQuestion.choices);
const result = getResults(randomQuestion, computerChoice);

// Tests

// 1. You should create an array named questions.
// 2. The questions array should contain at least five objects, each having the keys category, question, choices, and answer.
// 3. The category key should have the value of a string representing a question category.
// 4. The question key should have the value of a string representing a question.
// 5. The choices key should have the value of an array containing three strings.
// 6. The answer key should have the value of a string.
// 7. The value of answer should be included in the choices array.
// 8. You should have a function named getRandomQuestion that takes an array of questions as a parameter and returns a random question object from the array.
// 9. You should have a function named getRandomComputerChoice that takes the array of the available choices as a parameter, and returns a random answer to the selected question.
// 10. You should have a function named getResults.
// 11. Your getResults function should take the question object as the first parameter and the computer's choice as the second parameter.
// 12. If the computer choice matches the answer, getResults should return The computer's choice is correct!
// 13. If the computer choice doesn't match the answer, getResults should return The computer's choice is wrong. The correct answer is: <correct-answer>, where <correct-answer> is the value of the correct answer to the chosen question.
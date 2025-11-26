// Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

// User Stories:

// 1. You should have a function named getAverage that takes an array of test scores as a parameter and returns the average score.
// 2. You should have a function named getGrade that takes a student score as a parameter and returns a string representing a letter grade based on the score. Here are the scores and their corresponding letter grades:

// Score Range	    Grade
// 100	            "A+"
// 90 - 99	        "A"
// 80 - 89	        "B"
// 70 - 79	        "C"
// 60 - 69	        "D"
// 0 - 59	        "F"

// 3. You should have a function named hasPassingGrade that takes a score as a parameter and returns either true or false depending on if the score corresponds to a passing grade.
// 4. The hasPassingGrade function should use the getGrade function to get the letter grade, and use it to determine if the grade is passing. A passing grade is anything different from "F".
// 5. You should have a function named studentMsg that takes an array of scores and a student score as the parameters. The function should return a string with the format:
// - "Class average: average-goes-here. Your grade: grade-goes-here. You passed the course.", if the student passed the course.
// - "Class average: average-goes-here. Your grade: grade-goes-here. You failed the course.", if the student failed the course.
// Replace average-goes-here with the average of total scores and grade-goes-here with the student's grade. Use getAverage to get the average score and getGrade to get the student's grade.

const getAverage = (scores) => {
    let total = scores.reduce((sum, n) => sum + n, 0);

    return total / scores.length;
}

const getGrade = (score) => {
    if (score === 100) return "A+";
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return "F";
}

const hasPassingGrade = (score) => getGrade(score) !== "F";

const studentMsg = (scores, studentScore) => {
    const average = getAverage(scores);
    const grade = getGrade(studentScore);
    const passed = hasPassingGrade(studentScore);

    return `Class average: ${average}. Your grade: ${grade}. You ${passed ? 'passed' : 'failed'} the course.`;
}

// Tests

// 1. You should have a function named getAverage.
// 2. Your getAverage function should return a number.
// 3. getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]) should return 71.7.
// 4. getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]) should return 85.4.
// 5. getAverage([38, 99, 87, 100, 100, 100, 100, 100, 100, 100]) should return 92.4.
// 6. getAverage([10, 20, 30, 40, 55, 65, 75, 83]) should return 47.25.
// 7. getAverage([10, 20, 30, 40, 50, 60, 70, 97]) should return 47.125.
// 8. Your getAverage function should return the average score of the test scores.
// 9. You should have a function named getGrade.
// 10. Your getGrade function should return "A+" if the score is 100.
// 11. Your getGrade function should return "A" if the score is between 90 and 99.
// 12. Your getGrade function should return "B" if the score is between 80 and 89.
// 13. Your getGrade function should return "C" if the score is between 70 and 79.
// 14. Your getGrade function should return "D" if the score is between 60 and 69.
// 15. Your getGrade function should return "F" if the score is between 0 and 59.
// 16. You should have a function named hasPassingGrade.
// 17. Your hasPassingGrade function should return a boolean value.
// 18. Your hasPassingGrade function should return true if the grade is an "A".
// 19. Your hasPassingGrade function should return false if the grade is an "F".
// 20. Your hasPassingGrade function should return true for all passing grades.
// 21. You should have a function named studentMsg.
// 22. studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37) should return the following message: "Class average: 71.7. Your grade: F. You failed the course.".
// 23. studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100) should return the following message: "Class average: 50.8. Your grade: A+. You passed the course.".
// 24. studentMsg([12, 22, 32, 42, 52, 62, 72, 92], 85) should return the following message: "Class average: 48.25. Your grade: B. You passed the course.".
// 25. studentMsg([15, 25, 35, 45, 55, 60, 70, 60], 75) should return the following message: "Class average: 45.625. Your grade: C. You passed the course.".
// 26. Your studentMsg function should return the correct message based on the student's score and the class average.
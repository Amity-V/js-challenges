// Write a function, finalGrade(). It should:
// - take three number arguments
// - return ‘You have entered an invalid grade.’ if any of the three
//      grades are less than 0 or greater than 100
// - otherwise, find the average of those three numbers
// - return the letter grade (as a string) that the average corresponds to

// Assuming all the grades are valid, return a single letter representing
// the final grade based on the following scale:
//  0–59 should return: 'F'
//  60–69 should return: 'D'
//  70–79 should return: 'C'
//  80–89 should return: 'B'
//  90–100 should return: 'A'

// Write your function here:

const finalGrade = (num1, num2, num3) => {
    if (
        num1 < 0 ||
        num1 > 100 ||
        num2 < 0 ||
        num2 > 100 ||
        num3 < 0 ||
        num3 > 100
    )
        return "You have entered an invalid grade.";

    const average = (num1 + num2 + num3) / 3;
    let grade;

    switch (true) {
        case average >= 90:
            grade = "A";
            break;
        case average >= 80:
            grade = "B";
            break;
        case average >= 70:
            grade = "C";
            break;
        case average >= 60:
            grade = "D";
            break;
        default:
            grade = "F";
            break;
    }

    return grade;
};

// Uncomment the line below when you're ready to try out your function
console.log(finalGrade(99, 92, 95)) // Should print 'A'

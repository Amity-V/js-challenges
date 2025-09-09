// Write a function, lifePhase(), that takes in a person’s age, as a number,
// and returns which phase of life they are in.

// Here are the classifications:

// 0-3 should return 'baby'
// 4-12 should return 'child'
// 13-19 should return 'teen'
// 20-64 should return 'adult'
// 65-140 should return 'senior citizen'

// All of the ranges are inclusive of the beginning and ending numbers. If the
// number is less than 0 or greater than 140, the program should
// return 'This is not a valid age'

// Write your function here:

const lifePhase = (age) => {
    let phase;

    switch (true) {
        case age >= 0 && age <= 3:
            phase = "baby";
            break;
        case age >= 3 && age <= 12:
            phase = "child";
            break;
        case age >= 13 && age <= 19:
            phase = "teen";
            break;
        case age >= 20 && age <= 64:
            phase = "adult";
            break;
        case age >= 64 && age <= 140:
            phase = "senior citizen";
            break;
        default:
            phase = "This is not a valid age";
            break;
    }

    return phase;
};

// Uncomment the line below when you're ready to try out your function
console.log(lifePhase(5)) //should print 'child'

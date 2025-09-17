// Write a function, howOld(), that has two number parameters, age and year,
// and returns how old someone who is currently that age was (or will be) during
// that year. Handle three different cases:

// If the year is in the future, you should return a string in the following format:
// 'You will be [calculated age] in the year [year passed in]'

// If the year is before they were born, you should return a string in the following format:
// 'The year [year passed in] was [calculated number of years] years before you were born'

// If the year is in the past but not before the person was born, you should return a string
// in the following format:
// 'You were [calculated age] in the year [year passed in]'

// Write your function here:

const howOld = (age, year) => {
    const currentYear = 2025;
    const yearOfBirth = currentYear - age;
    let calculatedAge;
    let result;

    if (year >= currentYear) {
        calculatedAge = year - yearOfBirth;
        result = `You will be ${calculatedAge} in the year ${year}`;
    } else if (year >= yearOfBirth) {
        calculatedAge = year - yearOfBirth;
        result = `You were ${calculatedAge} in the year ${year}`;
    } else {
        calculatedAge = yearOfBirth - year;
        result = `The year ${year} was ${calculatedAge} years before you were born`;
    }

    return result;
};

// Once your function is written, write function calls to test your code!
howOld(31, 1993);

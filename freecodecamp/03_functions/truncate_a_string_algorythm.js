// In this lab, you will practice truncating a string to a certain length.

// Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

// User Stories:

// 1. You should have a function truncateString that accepts two arguments, the first one a string, the second one a number.
// 2. If the length of the string is more than the given number, the string should be truncated to reduce the length so that it is equal the given number, and ... should be appended at the end of the truncated string.
// 3. If the length of the string is equal to or lower than the given number, the string should be returned unchanged.

const truncateString = (str, num) =>
    str.length > num
        ? `${str.slice(0, num)}...`
        : str;

// Tests

// 1. truncateString("A-tisket a-tasket A green and yellow basket", 8) should return the string A-tisket....
// 2. truncateString("Peter Piper picked a peck of pickled peppers", 11) should return the string Peter Piper....
// 3. truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) should return the string A-tisket a-tasket A green and yellow basket.
// 4. truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) should return the string A-tisket a-tasket A green and yellow basket.
// 5. truncateString("A-", 1) should return the string A....
// 6. truncateString("Absolutely Longer", 2) should return the string Ab....
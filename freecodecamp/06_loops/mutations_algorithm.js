// Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

// User Stories:

// 1. Create a function named mutation that takes an array as its argument.
// 2. mutation should return true if the string in the first element of the array contains all of the letters of the string in the second element of the array, and false otherwise. For example:
//     - mutation(["hello", "Hello"]), should return true because all of the letters in the second string are present in the first, ignoring case.
//     - mutation(["hello", "hey"]) should return false because the string hello does not contain a y.
//     - mutation(["Alien", "line"]), should return true because all of the letters in line are present in Alien.

const mutation = (arr) => {
    const word1 = arr[0].toLowerCase();
    const word2 = arr[1].toLowerCase();

    for (const char of word2) {
        if (!word1.includes(char)) {
            return false;
        }
    }

    return true;
}

// Tests

// 1. mutation(["hello", "hey"]) should return false.
// 2. mutation(["hello", "Hello"]) should return true.
// 3. mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true.
// 4. mutation(["Mary", "Army"]) should return true.
// 5. mutation(["Mary", "Aarmy"]) should return true.
// 6. mutation(["Alien", "line"]) should return true.
// 7. mutation(["floor", "for"]) should return true.
// 8. mutation(["hello", "neo"]) should return false.
// 9. mutation(["voodoo", "no"]) should return false.
// 10. mutation(["ate", "date"]) should return false.
// 11. mutation(["Tiger", "Zebra"]) should return false.
// 12. mutation(["Noel", "Ole"]) should return true.
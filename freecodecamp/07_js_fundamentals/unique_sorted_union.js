// Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

// User Stories:

// 1. You should have a function named uniteUnique.
// 2. The uniteUnique function should accept two or more arrays as arguments.
// 3. The function should return a new array that contains unique values from the argument arrays, in the order they are first found in the arguments. For example, an input like [1, 2, 4], [2, 3, 5] would have an output of [1, 2, 4, 3, 5].

const uniteUnique = (...arrays) => {
    const unique = [];

    for (const arr of arrays) {
        arr.forEach(num => {
            if (!unique.includes(num)) unique.push(num)
        })
    }

    return unique;
}

// Tests

// 1. You should have a uniteUnique function.
// 2. uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
// 3. uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
// 4. uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].
// 5. uniteUnique([1, 3, 2], [5, 4], [5, 6]) should return [1, 3, 2, 5, 4, 6].
// 6. uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
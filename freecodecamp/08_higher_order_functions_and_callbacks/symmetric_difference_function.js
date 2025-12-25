// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

// Example:

// Array A: ["diamond", "stick", "apple"]
// Array B: ["stick", "emerald", "bread"]
// Result: ["diamond", "apple", "emerald", "bread"]

// Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

// User Stories:

// 1. Your function diffArray should return an array.
// 2. Your function should take two arguments, both of which are arrays.
// 3. Your function should make use of the filter method.
// 4. Your function should return the symmetric difference of the two arrays.
// 5. Your function should return an empty array if there is no symmetric difference.

const diffArray = (arr1, arr2) => {
    const filteredArr1 = arr1.filter(item => !arr2.includes(item));
    const filteredArr2 = arr2.filter(item => !arr1.includes(item));

    return [...filteredArr1, ...filteredArr2];
}

// Tests

// 1. You should have a function named diffArray.
// 2. The diffArray function should use the filter method to filter out items that are present in both arrays.
// 3. diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]) should return ["pink wool"].
// 4. diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]) should return ["diorite", "pink wool"].
// 5. diffArray should return an empty array when called with two identical arrays.
// 6. diffArray(["pen", "book"], ["book", "pencil", "notebook"]) should return ["pen", "pencil", "notebook"].
// 7. diffArray(["car", "bike", "bus"], ["bike", "train", "plane", "bus"]) should return ["car", "train", "plane"].
// 8. diffArray(["apple", "orange"], ["apple", "orange", "banana", "grape"]) should return ["banana", "grape"].
// 9. diffArray([], ["apple", "banana"]) should return ["apple", "banana"].
// 10. diffArray(["apple", "banana"], []) should return ["apple", "banana"].
// 11. diffArray([], []) should return [].
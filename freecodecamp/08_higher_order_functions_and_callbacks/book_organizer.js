// Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

// User Stories:

// 1. You should have an array of objects named books where each object in the array should have a string title, another string authorName, and a number releaseYear.
// 2. Your books array should have a minimum of three objects.
// 3. You should have a callback function named sortByYear that accepts two books as parameter for sorting the array.
// 4. The sortByYear function should return -1 if the releaseYear of the first book is smaller than that of the second book.
// 5. The sortByYear function should return 1 if the releaseYear of the first book is bigger than that of the second book.
// 6. The sortByYear function should return 0 if both releaseYear values are equal.
// 7. You should filter out books written after a certain year such as 1950 from the books array and save the filtered array in a new array named filteredBooks.
// 8. You should sort the books in the filteredBooks array according to their releaseYear in ascending order. You learned in a prior lesson that the sort() method will sort the array in place. This means the filteredBooks array will be mutated.



// Tests

// 1. You should have a function sortByYear in your code.
// 2. Your sortByYear function should take two parameters.
// 3. Your sortByYear function should return -1 if the releaseYear of book1 object is smaller than that of the book2 object, 1 if the releaseYear of book1 object is larger than that of the book2 object, and 0 in all other scenarios.
// 4. You should have an array books in your code.
// 5. Your books array should have at least three book objects.
// 6. Your books array should contain objects each with a string title, another string authorName, and a number releaseYear.
// 7. You should have an array filteredBooks in your code.
// 8. The filteredBooks array should have some of the books filtered out from the books array and not be empty.
// 9. You should call the sort higher order function by passing the sortByYear callback function on the filteredBooks array.
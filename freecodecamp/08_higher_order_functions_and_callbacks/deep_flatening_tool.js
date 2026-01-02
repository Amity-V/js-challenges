// In this lab, you will be implementing an array flattening algorithm.

// Flattening an array means turning a nested array of any depth into a single, one-dimensional array. The process extracts all elements in order, unwrapping only arrays. Other types are left unchanged.

// For example:

// Original	                    Flattened
// [[1], [], [2, [3]]]	        [1, 2, 3]
// [1, {"foo": "bar"}, [2]]     [1, {"foo": "bar"}, 2]
// ["baz", [1, 2], {}]	        ["baz", 1, 2, {}]

// Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

// User Stories:

// 1. You should have a function named steamrollArray.
// 2. The steamrollArray function should accept one argument: a nested array.
// 3. The function should flatten the nested array, accounting for varying levels of nesting.
// 4. Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.
// 5. Global variables should not be used.

const steamrollArray = (arr) => {
    const result = [];

    const flatten = (item) => {
        if (!Array.isArray(item)) {
            result.push(item);
        } else {
            for (let element of item) {
                flatten(element);
            }
        }
    }

    flatten(arr);

    return result;
}

// Tests

// 1. You should have a steamrollArray function.
// 2. steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
// 3. steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
// 4. steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
// 5. steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].
// 6. Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.
// 7. You should not use global variables.
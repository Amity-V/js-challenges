// Link: https://www.codewars.com/kata/58842a2b4e8efb92b7000080/javascript

/*

You found two items in a treasure chest! The first item weighs weight1 and is
worth value1, and the second item weighs weight2 and is worth value2. What is
the total maximum value of the items you can take with you, assuming that your
max weight capacity is maxW/max_w and you can't come back for the items later?

Example

For value1 = 10, weight1 = 5, value2 = 6, weight2 = 4 and maxW = 8, the output should be

    knapsackLight(value1, weight1, value2, weight2, maxW) === 10
    You can only carry the first item.

For value1 = 10, weight1 = 5, value2 = 6, weight2 = 4 and maxW = 9, the output should be

    knapsackLight(value1, weight1, value2, weight2, maxW) === 16
    You're strong enough to take both of the items with you.

For value1 = 10, weight1 = 10, value2 = 6, weight2 = 10 and maxW = 9, the output should be

    knapsackLight(value1, weight1, value2, weight2, maxW) === 0
    Unfortunately, you're not strong enough to take any one :(

Input/Output

[input] integer value1

    Constraints: 2 ≤ value1 ≤ 50.

[input] integer weight1

    Constraints: 2 ≤ weight1 ≤ 30.

[input] integer value2

    Constraints: 2 ≤ value2 ≤ 50.

[input] integer weight2

    Constraints: 2 ≤ weight2 ≤ 30.

[input] integer maxW/max_w

    Constraints: 1 ≤ maxW ≤ 50.

[output] an integer

*/

const knapsackLight = (value1, weight1, value2, weight2, maxW) =>
  [
    { value: value1, weight: weight1 },
    { value: value2, weight: weight2 },
  ]
    .sort((a, b) => b.value - a.value)
    .reduce(
      (curr, acc) =>
        curr.weight + acc.weight <= maxW
          ? { value: curr.value + acc.value, weight: curr.weight + acc.weight }
          : curr,
      { value: 0, weight: 0 }
    )["value"];

console.log(knapsackLight(10, 5, 6, 4, 8)); // 10
console.log(knapsackLight(10, 5, 6, 4, 9)); // 16
console.log(knapsackLight(10, 2, 11, 3, 1)); // 0
console.log(knapsackLight(15, 2, 20, 3, 2)); // 15
console.log(knapsackLight(2, 5, 3, 4, 5)); // 3
console.log(knapsackLight(4, 3, 3, 4, 4)); // 4
console.log(knapsackLight(3, 5, 3, 8, 10)); // 3

/* Top 3 solutions: (sorted by best practices)

===

function knapsackLight(value1, weight1, value2, weight2, maxW) {
  if (maxW < weight1 && maxW < weight2) return 0;
  if (maxW >= weight1 + weight2) return value1 + value2;
  if (maxW >= weight1 && maxW < weight2) return value1;
  if (maxW >= weight2 && maxW < weight1) return value2;
  return Math.max(value1, value2);
}

===

const knapsackLight = (value1, weight1, value2, weight2, maxW) =>
  Math.min(weight1, weight2) > maxW
    ? 0
    : weight1 + weight2 <= maxW
    ? value1 + value2
    : weight1 > maxW
    ? value2
    : weight2 > maxW
    ? value1
    : Math.max(value1, value2);

===

function knapsackLight(v1, w1, v2, w2, maxWeight) {
  const items = [
    [v1, w1],
    [v2, w2],
    [v1 + v2, w1 + w2],
  ];
  return items.reduce(
    (max, [value, weight]) => (weight > maxWeight ? max : Math.max(value, max)),
    0
  );
}

*/

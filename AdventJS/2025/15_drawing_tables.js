// ChatGPT has arrived at the North Pole and the elf Sam Elfman is working on a gift and children management application.

// To improve the presentation, he wants to create a drawTable function that receives an array of objects and turns it into a text table.

// The drawn table must have:

// - A header with column letters (A, B, C…).
// - The content of the table is the values of the objects.
// - The values must be left-aligned.
// - The fields always leave one space on the left.
// - The fields leave on the right the space needed to align the box.
// - The function receives a second parameter sortBy that indicates the name of the field by which the rows must be sorted. The order will be ascending alphabetical if the values are strings and ascending numeric if they are numbers.

// Check the example to see how you should draw the table:

// drawTable(
//   [
//     { name: 'Charlie', city: 'New York' },
//     { name: 'Alice', city: 'London' },
//     { name: 'Bob', city: 'Paris' }
//   ],
//   'name'
// )
// // +---------+----------+
// // | A       | B        |
// // +---------+----------+
// // | Alice   | London   |
// // | Bob     | Paris    |
// // | Charlie | New York |
// // +---------+----------+

// drawTable(
//   [
//     { gift: 'Book', quantity: 5 },
//     { gift: 'Music CD', quantity: 1 },
//     { gift: 'Doll', quantity: 10 }
//   ],
//   'quantity'
// )
// // +----------+----+
// // | A        | B  |
// // +----------+----+
// // | Music CD | 1  |
// // | Book     | 5  |
// // | Doll     | 10 |
// // +----------+----+

/**
 * @param {Array<Object>} data - The data to draw the table
 * @param {string} sortBy - The field to sort the table
 * @returns {string}
 */

const drawTable = (data, sortBy) => {
  const keys = Object.keys(data[0]);

  const sorted = [...data].sort((a, b) =>
    a[sortBy] < b[sortBy] ? -1 : a[sortBy] > b[sortBy] ? 1 : 0,
  );

  const widths = keys.map((key) =>
    Math.max(...sorted.map((row) => String(row[key]).length)),
  );

  const separator = "+" + widths.map((w) => "-".repeat(w + 2)).join("+") + "+";

  const header =
    "|" +
    keys
      .map((_, i) => ` ${String.fromCharCode(65 + i)}${" ".repeat(widths[i])}`)
      .join("|") +
    "|";

  const body = sorted
    .map(
      (row) =>
        "|" +
        keys
          .map((key, i) => {
            const value = String(row[key]);
            return ` ${value}${" ".repeat(widths[i] - value.length)} `;
          })
          .join("|") +
        "|",
    )
    .join("\n");

  return `${separator}\n${header}\n${separator}\n${body}\n${separator}`;
};

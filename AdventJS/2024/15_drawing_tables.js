// ChatGPT has arrived at the North Pole and the elf Sam Elfman is working on an application for managing gifts and children.

// To enhance the presentation, he wants to create a function drawTable that receives an array of objects and converts it into a text table.

// The drawn table should represent the object data as follows:
// - It has a header with the column name.
// - The column name has the first letter capitalized.
// - Each row should contain the values of the objects in the corresponding order.
// - Each value must be left-aligned.
// - Fields always leave a space on the left.
// - Fields leave the necessary space on the right to align the box.

// Look at the example to see how you should draw the table:

// drawTable([
//   { name: 'Alice', city: 'London' },
//   { name: 'Bob', city: 'Paris' },
//   { name: 'Charlie', city: 'New York' }
// ])
// // +---------+-----------+
// // | Name    | City      |
// // +---------+-----------+
// // | Alice   | London    |
// // | Bob     | Paris     |
// // | Charlie | New York  |
// // +---------+-----------+

// drawTable([
//   { gift: 'Doll', quantity: 10 },
//   { gift: 'Book', quantity: 5 },
//   { gift: 'Music CD', quantity: 1 }
// ])
// // +----------+----------+
// // | Gift     | Quantity |
// // +----------+----------+
// // | Doll     | 10       |
// // | Book     | 5        |
// // | Music CD | 1        |
// // +----------+----------+

/**
 * @param {Array<Object>} data
 * @returns {string}
 */

function drawTable(data) {
  const keys = Object.keys(data[0]);

  const widths = keys.map((key) =>
    Math.max(key.length, ...data.map((row) => String(row[key]).length)),
  );

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
  const padRight = (str, width) => ` ${str}${" ".repeat(width - str.length)} `;

  const separator = "+" + widths.map((w) => "-".repeat(w + 2)).join("+") + "+";

  const header =
    "|" +
    keys.map((key, i) => padRight(capitalize(key), widths[i])).join("|") +
    "|";

  const body = data
    .map(
      (row) =>
        "|" +
        keys.map((key, i) => padRight(String(row[key]), widths[i])).join("|") +
        "|",
    )
    .join("\n");

  return [separator, header, separator, body, separator].join("\n");
}

// Simulate the path of a gift inside a factory and return how it ends. To do this, you must create a function runFactory(factory).

// factory is a string[] where each cell can be:

// > < ^ v movements
// . correct exit

// Keep in mind that all rows have the same length and that there will be no other symbols.

// The gift always starts at position (0,0) (top left). At each step it reads the current cell and moves according to the direction. If it reaches a cell with a dot (.) it means it has correctly exited the factory.

// Result

// Return one of these values:
// - 'completed' if it reaches a .
// - 'loop' if it visits a position twice
// - 'broken' if it goes outside the board

// Examples

// runFactory([
//   '>>.'
// ]) // 'completed'

// runFactory([
//   '>>>'
// ]) // 'broken'

// runFactory([
//   '>><'
// ]) // 'loop'

// runFactory([
//   '>>v',
//   '..<'
// ]) // 'completed'

// runFactory([
//   '>>v',
//   '<<<'
// ]) // 'broken'

// runFactory([
//   '>v.',
//   '^..'
// ]) // 'completed'

// runFactory([
//   'v.',
//   '^.'
// ]) // 'loop'

/**
 * @param {string[]} factory - The factory layout
 * @returns {'completed'|'broken'|'loop'} Result of the gift journey
 */

const runFactory = (factory) => {
  const moveMap = {
    ">": { c: 1, r: 0 },
    "<": { c: -1, r: 0 },
    "^": { c: 0, r: -1 },
    "v": { c: 0, r: 1 },
  };
  const max = factory[0].length * factory.length;
  const maxRow = factory.length - 1;
  const maxCol = factory[0].length - 1;

  let position = { c: 0, r: 0 };

  for (let i = 0; i < max; i += 1) {
    const current = factory[position.r][position.c];

    if (current === ".") return "completed";

    const c = position.c + moveMap[current].c;
    const r = position.r + moveMap[current].r;

    if (r < 0 || c < 0 || r > maxRow || c > maxCol) return "broken";

    position = { c, r };
  }

  return "loop";
};

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 *
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */

function calculateHanoi(disksNumber, turnsSpeed) {
  const turnsPerSecond = turnsSpeed / 60 / 60;
  let turns = 1 * 2 + 1; // Number of turns for 2 disks

  for (let i = 3; i <= disksNumber; i += 1) {
    turns = turns * 2 + 1;
  }

  const seconds = Math.floor(turns / turnsPerSecond);

  return { turns, seconds };
}

module.exports = {
  calculateHanoi,
};

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */

function createDreamTeam(members) {
  if (!(members instanceof Array)) {
    return false;
  }

  const dreamTeamName = [];

  for (const member of members) {
    if (typeof member === "string" && member.trim().length > 0) {
      dreamTeamName.push(member.trim().toUpperCase()[0]);
    }
  }

  return dreamTeamName.length > 0 ? dreamTeamName.sort().join("") : false;
}

module.exports = {
  createDreamTeam,
};

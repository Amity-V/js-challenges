// Link:

/*

You are given two strings s and t of the same length, consisting of uppercase English
letters. Your task is to find the minimum number of "replacement operations" needed to
get some anagram of the string t from the string s. A replacement operation is performed
by picking exactly one character from the string s and replacing it by some other
character.

About anagram: А string x is an anagram of a string y if one can get y by rearranging
the letters of x. For example, the strings "MITE" and "TIME" are anagrams, so are "BABA"
and "AABB", but "ABBAC" and "CAABA" are not.

Example

For s = "AABAA" and t = "BBAAA", the output should be 1;
For s = "OVGHK" and t = "RPGUC", the output should be 4.

Input/Output

[input] string s

    Constraints: 5 ≤ s.length ≤ 35.

[input] string t

    Constraints: t.length = s.length.

[output] an integer

    The minimum number of replacement operations needed to get an anagram of the
        string t from the string s.

*/

const createAnagram = (s, t, sMap = new Map()) => {
  s.split("").map((l) => {
    sMap.get(l) ? sMap.set(l, sMap.get(l) + 1) : sMap.set(l, 1);
  });

  t.split("").map((l) => (sMap.get(l) ? sMap.set(l, sMap.get(l) - 1) : null));

  return [...sMap].reduce((acc, curr) => acc + curr[1], 0);
};

console.log(createAnagram("AABAA", "BBAAA")); // 1
console.log(createAnagram("OVGHK", "RPGUC")); // 4
console.log(
  createAnagram(
    "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB",
    "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC"
  )
); // 1

/* Top 3 solutions: (sorted by best practices)

===

const createAnagram = (
  s,
  t,
  a = s.split``.map((x) => (t = t.replace(x, "")))
) => t.length;

===

const createAnagram = (s, t) =>
  [...s].reduce((pre, val) => pre.replace(val, ``), t).length;

===

const createAnagram = (r, s) => {
  const m = {};
  for (const c of r) m[c] = (m[c] || 0) + 1;
  for (const c of s) m[c] = (m[c] || 0) - 1;
  return Object.values(m).reduce((s, n) => s + Math.abs(n), 0) / 2;
};

*/

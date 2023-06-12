// Link: https://www.codewars.com/kata/573023c81add650b84000429

/*

Coding in function countGrade. function accept 1 parameters scores, it's a
number array. Your task is to count the grade distribution of the scores,
to return an object like this:

{S:888, A:888, B:888, C:888, D:888, X:888}

Grading rules:

    Grade S: Full marks(score=100)
    Grade A: score<100 and score>=90
    Grade B: score<90 and score>=80
    Grade C: score<80 and score>=60
    Grade D: score<60 and score>=0
    Grade X: score=-1(The cheating guy gets a score like that)

Example

    countGrade([50,60,70,80,90,100]) should return {S:1, A:1, B:1, C:2, D:1, X:0}
    countGrade([65,75,,85,85,95,100,100]) should return {S:2, A:1, B:2, C:2, D:0, X:0}
    countGrade([-1,-1,-1,-1,-1,-1]) should return {S:0, A:0, B:0, C:0, D:0, X:6}

*/

const countGrade = (scores) => ({
  S: scores.filter((s) => s === 100).length,
  A: scores.filter((s) => s < 100 && s >= 90).length,
  B: scores.filter((s) => s < 90 && s >= 80).length,
  C: scores.filter((s) => s < 80 && s >= 60).length,
  D: scores.filter((s) => s < 60 && s >= 0).length,
  X: scores.filter((s) => s === -1).length,
});

console.log(countGrade([50, 60, 70, 80, 90, 100])); // {S:1, A:1, B:1, C:2, D:1, X:0}
console.log(countGrade([65, 75, , 85, 85, 95, 100, 100])); // {S:2, A:1, B:2, C:2, D:0, X:0}
console.log(countGrade([-1, -1, -1, -1, -1, -1])); // {S:0, A:0, B:0, C:0, D:0, X:6}

/* Top 3 solutions: (sorted by best practices)

===

function countGrade(scores) {
  var count = f => scores.filter(v => f(v)).length;
  return {
    S: count(v => v == 100),
    A: count(v => v < 100 && v >= 90),
    B: count(v => v < 90 && v >= 80),
    C: count(v => v < 80 && v >= 60),
    D: count(v => v < 60 && v >= 0),
    X: count(v => v == -1)
  }
}

===

function countGrade(arr) {
  get = (a, b) => arr.filter((i) => i >= a && i < b).length;
  return {
    S: get(100, 101),
    A: get(90, 100),
    B: get(80, 90),
    C: get(60, 80),
    D: get(0, 60),
    X: get(-1, 0),
  };
}

===

function countGrade(scores) {
  const result = {S:0, A:0, B:0, C:0, D:0, X:0};
  scores.forEach(score => {
    if (score >= 100) result['S']++;
    else if (score >= 90) result['A']++;
    else if (score >= 80) result['B']++;
    else if (score >= 60) result['C']++;
    else if (score >= 0) result['D']++;
    else result['X']++;
  });
  return result;
}

*/

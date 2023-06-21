// Link: https://www.codewars.com/kata/5884658d02accbd0a7000039/javascript

/*

To prepare his students for an upcoming game, the sports coach decides to try
some new training drills. To begin with, he lines them up and starts with the
following warm-up exercise:

    when the coach says 'L', he instructs the students to turn to the left.
    Alternatively, when he says 'R', they should turn to the right.
    Finally, when the coach says 'A', the students should turn around.

Unfortunately some students (not all of them, but at least one) can't tell left
from right, meaning they always turn right when they hear 'L' and left when they
hear 'R'. The coach wants to know how many times the students end up facing the
same direction.

Given the list of commands the coach has given, count the number of such commands
after which the students will be facing the same direction.

Example

For commands = "LLARL", the output should be 3.

Let's say that there are 4 students, and the second one can't tell left from right.
In this case, only after the second, third and fifth commands will the students
face the same direction.

Input/Output

[input] string commands

    String consisting of characters 'L', 'R' and 'A' only.
    Constraints: 0 ≤ commands.length ≤ 35

[output] an integer

    The number of commands after which students face the same direction.

*/

const lineUp = (commands) => {
  const p = [0, 0];

  return [...commands].reduce((acc, curr) => {
    if (!curr) return acc;

    p[0] = curr === "L" ? p[0] + 1 : curr === "R" ? p[0] - 1 : p[0];
    p[1] = curr === "L" ? p[1] - 1 : curr === "R" ? p[1] + 1 : p[1];

    return p[0] % 2 && p[1] % 2 ? acc : acc + 1;
  }, 0);
};

console.log(lineUp("LLARL")); // 3
console.log(lineUp("RLR")); // 1
console.log(lineUp("")); // 0
console.log(lineUp("L")); // 0
console.log(lineUp("A")); // 1
console.log(lineUp("AAAAAAAAAAAAAAA")); // 15
console.log(lineUp("RRRRRRRRRRLLLLLLLLLRRRRLLLLLLLLLL")); // 16
console.log(lineUp("AALAAALARAR")); // 5

/* Top 3 solutions: (sorted by best practices)

===

const lineUp = (commands, flag = true) =>
  [...commands].reduce(
    (pre, val) => pre + (flag = val !== `A` ? !flag : flag),
    0
  );

===

function lineUp(commands) {
  var count = 0, aligned = true;
  for(let c of commands) {
    if(c==='L'||c==='R')aligned = !aligned;
    count += aligned;
  }
  return count;
}

===

const lineUp = commands => 
  commands
    .replace(/[LR]A*[LR]/g, 'A')
    .replace(/[LR]A+$/, '')
    .split('A').length - 1;

*/

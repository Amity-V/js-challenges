// Link: https://www.codewars.com/kata/5886f3713a111b620f0000dc/javascript

/*

You are implementing your own HTML editor. To make it more comfortable for
developers you would like to add an auto-completion feature to it.

Given the starting HTML tag, find the appropriate end tag which your editor
should propose.

Example

For startTag = "<button type='button' disabled>", the output should be "</button>";
For startTag = "<i>", the output should be "</i>".

Input/Output

[input] string startTag/start_tag

[output] a string

*/

const htmlEndTagByStartTag = (startTag) =>
  `</${startTag.split(" ")[0].slice(1).split(">")[0]}>`;

console.log(htmlEndTagByStartTag("<button type='button' disabled>")); // "</button>"
console.log(htmlEndTagByStartTag("<i>")); // "</i>"
console.log(
  htmlEndTagByStartTag(
    "<div id='my_area' class='data' title='This is a test for title on Div tag'>"
  )
); // "</div>"

/* Top 3 solutions: (sorted by best practices)

===

function htmlEndTagByStartTag(startTag) {
  return "</" + startTag.match(/\w+/) + ">";
}

===

function htmlEndTagByStartTag(startTag) {
  return `</${/<(\w+)/.exec(startTag)[1]}>`;
}

===

function htmlEndTagByStartTag(startTag) {
  let a = startTag.split(" ")[0].split(">")[0].slice(1);
  return `</${a}>`;
}

*/

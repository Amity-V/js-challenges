// Link: https://www.codewars.com/kata/573e6831e3201f6a9b000971

/*

You might have guessed the task. Yes, This time your task is to write a regular
expressions matching all palindrome substring of a string.

The rules:

1. The string contains letters, numbers, underscores and spaces. space is the
separator. the substring means the whole of a substring that separated by spaces.
For example:

    "aaa bcccd" should match a substring "aaa" , 
    should not match "ccc", "ccc" is a part of substring "bcccd"

2. Palindrome substring length range is 2-7. It means don't match the substring which length=1 or length>7.
3. A string may contain multiple palindrome substring.
4. You should not ignore case.
5. Your regular expression name should be regex and your result should be a string array.

Examples

    "aa bbb cccc".match(regex)             should return [ 'aa', 'bbb', 'cccc' ]
    "aaa bcccd".match(regex)               should return [ 'aaa' ]
    "_x_x_ --- ~~|~~".match(regex)         should return [ '_x_x_' ]
    "ABCDCBA ABABABA".match(regex)         should return [ 'ABCDCBA', 'ABABABA' ]
    "121 1221 13577531 11211".match(regex) should return [ '121', '1221', '11211' ]
    "aabbbcccc d".match(regex)             should return null
    "1    1".match(regex)                  should return null 
    "abbA CdDc".match(regex)               should return null

*/

const regex = /\b(\w)(\w)?(\w)?\w?\3\2\1\b/g;

/* Top 3 solutions: (sorted by best practices)

===

const regex = /\b(\w)(\w)?(\w)?\w?\3\2\1\b/g;

//    \b - spaces around the words / numbers
//    (\w) - first symbol
//    (\w)? - find out how many symbols in word/number
//    \b(\w)(\w)?(\w)?\w?\3\2\1\b checking for palyndrome
//        1   2    3    4 5 6 7

//    7th symbol must match 1 sub expression, 6 = 2, 5 = 3 and 4th symbol in the middle.
//    So \3 checks if the 5th symbol equal 3rd subexpression, /2 - if the 6th symbol match 2nd subexpression, /1 - if the 7th symbol math 1st subexpression.

//    for example str   '   A   B   C   D  C B A  '
//    regex             \b(\w)(\w)(\w)(\w)\3\2\1\\b
//    sub expression №      1   2   3   4

===



===



*/

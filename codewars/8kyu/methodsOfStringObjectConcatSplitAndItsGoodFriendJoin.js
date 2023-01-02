// Link: https://www.codewars.com/kata/57280481e8118511f7000ffa

/*

Implement a function which accepts 2 arguments: string and separator.

The expected algorithm: split the string into words by spaces, split each word into
separate characters and join them back with the specified separator, join all the
resulting "words" back into a sentence with spaces.

For example:

    splitAndMerge("My name is John", " ")  ==  "M y n a m e i s J o h n"
    splitAndMerge("My name is John", "-")  ==  "M-y n-a-m-e i-s J-o-h-n"
    splitAndMerge("Hello World!", ".")     ==  "H.e.l.l.o W.o.r.l.d.!"
    splitAndMerge("Hello World!", ",")     ==  "H,e,l,l,o W,o,r,l,d,!"

*/

const splitAndMerge = (string, separator) =>
  string
    .split(" ")
    .map((word) => word.split("").join(separator))
    .join(" ");

/* Top 3 solutions: (sorted by best practices)

===

function splitAndMerge(str,sp){
  var words = str.split(" ");
  var arr =[];
  var res = []
  for(i=0;i<words.length;i++){
   arr.push(words[i].split("").join(sp));
  }
  res = arr.join(" ");
  return res;
}

===

const splitAndMerge = (str, sp) => str.split(' ').map(x => [...x].join(sp)).join(' ')

===

function splitAndMerge(str, sp) {
  return str.replace(/\S+/g, w => w.replace(/.(?=.)/g, '$&' + sp));
}

*/

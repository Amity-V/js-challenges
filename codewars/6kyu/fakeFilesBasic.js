// Link: https://www.codewars.com/kata/fun-with-es6-classes-number-6-fake-files-basic

/*

In Kata #1-4 in this series, we learned the fundamentals and features of ES6 classes
including ES6 class syntax, classical inheritance in ES6 (as opposed to prototypal
inheritance in all previous versions of ECMAScript/Javascript), getters and setters.
In Kata #5 of this Series we began to apply our knowledge of ES6 classes to solve the
challenge, but the challenge was still a bit Codecademy-like (traning level code) and
did not resemble a real world application. Therefore, in this Kata of the series, we
are going to apply our knowledge of ES6 class syntax and features in a semi-real world
application.

    Task:

You will be defining a class File (ES6 syntax please :) ) with the following properties
and methods:

    Properties:
        fullName
        filename
        extension

    Methods:
        getContents()
        write(str)
        gets()
        getc()

    Your File class should exhibit the following behaviour:
    
    Constructor
        Your constructor should accept two arguments in the following order: fullName
        and contents, where fullName is the full name of the file (including file
        extension) and contents is the file contents.

    An instance of your File class should exhibit the following behaviour:

    fullName (property)
        Should contain the full name of the file, including the file extension. Please
        note that the fullName property should be read-only, which means that attempts
        to reassign fullName a new value should fail and it should retain its original
        value. For example:

        var myFile = new File("hello.txt", "Hello World");
        console.log(myFile.fullName); // hello.txt
        myFile.fullName = "goodbye.txt"; // Reassignment should fail
        console.log(myFile.fullName); // still "hello.txt"

    filename (property)
        Should contain the name of the file, excluding the file extension. Should also
        be read-only which means reassignment attempts should fail. E.g.

        var file1 = new File("hello_world.txt", "Hello World");
        console.log(file1.filename); // "hello_world"
        file1.filename = "goodbye_world"; // Reassignment should fail
        console.log(file1.filename); // still "hello_world"

        var file2 = new File("class.phptester.php", "<?php * Some PHP code here * ?>");
        console.log(file2.filename); // "class.phptester" - the filename should be
        correctly identified even if the filename itself contains the '.' character

    extension (property)
        Should contain the file extension. Read-only. E.g.

        var fileWithComplexName = new File("alpha.beta.gamma.delta.txt", "alpha beta gamma delta");
        console.log(fileWithComplexName.extension); // "txt"
        fileWithComplexName.extension = "js"; // Reassignment should fail
        console.log(fileWithComplexName.extension); // still "txt"

    getContents (method)
        Should return the contents of the file every time. E.g.

        var myFile = new File("hello.txt", "Hello World\nHello World");
        console.log(myFile.getContents()); // "Hello World\nHello World"

    write (method)
        Should accept exactly 1 argument str, the new content to be written to the file. The new content should be written on a new line on the file. For example:

        var myFile = new File("example.txt", "");
        console.log(myFile.getContents()); // ""
        myFile.write("Line 1");
        console.log(myFile.getContents()); // "Line 1"
        myFile.write("Line 2");
        console.log(myFile.getContents()); // "Line 1\nLine 2"
        myFile.write("Line 3");
        console.log(myFile.getContents()); // "Line 1\nLine 2\nLine 3"

    gets (method)
        Returns a line on the file, starting on Line 1. Successive calls to the method should return successive lines on the file. If the number of calls exceeds the number of lines on the file, simple return undefined. E.g.:

        var myFile = new File("example.txt", "Line 1\nLine 2\nLine 3\nLine 4\nLine 5");
        console.log(myFile.gets()); // "Line 1"
        console.log(myFile.gets()); // "Line 2"
        console.log(myFile.gets()); // "Line 3"
        console.log(myFile.gets()); // "Line 4"
        console.log(myFile.gets()); // "Line 5"
        console.log(myFile.gets()); // undefined
        console.log(myFile.gets()); // undefined
        console.log(myFile.gets()); // undefined

    getc (method)
        Should return a character on the file, starting from the first character.
        Successive calls should return successive characters on the file. If the
        number of calls exceeds the number of characters on the file, it should
        simply return undefined. Example:

        var myFile = new File("Lorem Ipsum.txt", "Lorem ipsum dolor sit amet, adispicing eu.");
        console.log(myFile.getc()); // "L"
        console.log(myFile.getc()); // "o"
        console.log(myFile.getc()); // "r"
        console.log(myFile.getc()); // "e"
        console.log(myFile.getc()); // "m"
        console.log(myFile.getc()); // " "
        console.log(myFile.getc()); // "i"
        console.log(myFile.getc()); // "p"
        // ... (many calls to myFile.getc())
        console.log(myFile.getc()); // undefined (when number of calls exceeds character count)

Note regarding filenames

For the purposes of this Kata, all filenames used in this Kata will be valid filenames.
Valid filenames are summarized as follows:

    Contains a filename and extension (e.g. LICENSE.txt is a valid filename, LICENSE is not)
    Filename contains only alphanumeric characters (both uppercase and lowercase), underscores,
        spaces and/or dots (e.g. index.php, class.phptester.php, 
        alpha beta.gamma_delta01.complicatedExample.txt are all valid filenames).
        Edge cases will not be considered (e.g. successive dots - Hello World..txt
        - will not appear in the test cases)
    Extension contains only lowercase alphanumeric characters (e.g. txt, php, php3 are all valid)

Note regarding file content

All file content will be valid. In this Kata, valid file content may include alphanumeric
characters (uppercase or lowercase), underscores, ordinary whitespace, punctuation or
mathematical symbols, in which each line will be separated from the next by a newline
character ("\n"). There will not be tabs or other whitespace/newline characters other
than "\s" (spacebar) or "\n" and the contents of any file will not start or end with a
newline. You may also assume that when the tests use the write(str) method, the string
str will not contain newline characters itself.
    
*/

class File {
  _getsIndex = 0;
  _getcIndex = 0;

  constructor(fullName, contents) {
    this._fullName = fullName;
    this._contents = contents;
  }

  get fullName() {
    return this._fullName;
  }

  get filename() {
    const dotIndex = this._fullName.lastIndexOf(".");
    return this._fullName.slice(0, dotIndex);
  }

  get extension() {
    const dotIndex = this._fullName.lastIndexOf(".");
    return this._fullName.slice(dotIndex + 1);
  }

  getContents() {
    if (this._contents.startsWith("\n")) {
      return this._contents.slice(1);
    }
    return this._contents;
  }

  write(str) {
    const _str = str.length === 0 ? str : `\n${str}`;
    this._contents += _str;
  }

  gets() {
    if (this._getsIndex === -1) {
      return undefined;
    }

    const contents = this._contents.startsWith("\n")
      ? this._contents.slice(1)
      : this._contents;
    const startIndex = this._getsIndex;
    const endIndex = contents.indexOf("\n", startIndex);
    const line = contents.slice(
      startIndex,
      endIndex === -1 ? contents.length : endIndex
    );

    this._getsIndex = endIndex === -1 ? endIndex : endIndex + 1;

    return line;
  }

  getc() {
    if (this._getcIndex === this._contents.length) {
      return undefined;
    }

    const character = this._contents.slice(
      this._getcIndex,
      this._getcIndex + 1
    );

    this._getcIndex += 1;

    return character;
  }
}

/* Top 3 solutions: (sorted by best practices)

===

class File {
  constructor(file, contents) {
    Object.defineProperties(this, {
      'fullName': { value: file },
      'filename': {
        value: file.slice(0, file.lastIndexOf('.'))
      },
      'extension': {
        value: file.slice(file.lastIndexOf('.') + 1)
      },
      'line': {
        value: 0,
        configurable: true,
        writable: true
      },
      'char': {
        value: 0,
        configurable: true,
        writable: true
      },
      'contents': {
      	value: contents,
        configurable: true,
        writable: true
      }
    });
  }
  getContents() {
    return this.contents;
  }
  write(str) {
    this.contents += (this.contents ? '\n' : '') + str;
  }
  gets() {
    return this.getContents().split('\n')[this.line++];
  }
  getc() {
    return this.getContents()[this.char++];
  }
}

===

let getCounter = function(func) {
  let counter = 0;
  return () => func.call(this, counter++);
}

class File {
  constructor(fullName, contents) {
    this._fullName = fullName;
    this._filename = fullName.slice(0, fullName.split('').lastIndexOf('.'));
    this._extension = fullName.slice(fullName.split('').lastIndexOf('.') + 1, fullName.length);
    this._contents = contents;
    
    this.gets = getCounter( counter => this._contents.split('\n')[counter] );
    this.getc = getCounter( counter => this._contents[counter] );
  }
  
  get fullName() { return this._fullName; }
  get filename() { return this._filename; }
  get extension() { return this._extension; }
  getContents() { return this._contents }
  
  write(str) { this._contents = this._contents ? this._contents + `\n${str}` : str}
}

===

class File {
  constructor(fullName,contents){
    var _fullName = fullName;
    this.countWords=0;
    this.countSym=0;
    this.contents=contents;
    this.getName = () =>  _fullName; 
    this.getContents = () => this.contents;
    this.write = (str) => this.contents!='' ? this.contents=`${this.contents}\n${str}` : this.contents=`${str}`
    this.gets = () => this.contents.split('\n')[this.countWords++];
    this.getc = () => this.contents.split('')[this.countSym++];
    this.arr = this.getName().split('.');
  }
  get fullName(){
    return this.getName();
  }
  get filename(){
    return this.arr.filter( (item,i) => i!=this.arr.length-1).join('.');
  }
  get extension(){
    return this.arr[this.arr.length-1];
  }
}

*/

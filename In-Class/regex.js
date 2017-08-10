//Regular expressions: can be used inside and outside js

/* patterns you can use to match text
extremly powerful tool for doing things:
  - searching logs
      - counting the nums of errors
  - enforcing inputs

Matching Letter:
Given "abc"
all of the following are valid regex patterns to match this string:
a; b; c; ab; bc; abc

You can do the same with numbers as well

123 abc
shortcut to find numbers by using : \d
you can combine letters and numbers: "c1" in "abc123"

Wild Card Characters: matches anything that exsits
'.' is a special char in regex
It's a meta Characters by itself in regex
have to escape the '.' with a forward slash if you are actually looking for a period: \.

Specific Chars:
use the [] notation to match
"cat", "bat", "rat"

using bracket notation we can math thr first two but not the third with the following
pattern [cr] -this is like an or notation

Exclude Characters:
^ (caret)
combine with square bracket to exclude Chars: [^b]at - don't want the b
you can combine the regex toghether

Character ranges:
[a-z][0-9][n-p]
By using the dash symbol, we can match on ranges of chars

[a-zA-Z0-9] this exp will match any num expression: shortcut \w \W(search for all non)

If you want mutiple instances of the same chars {}
put a num in the curly brackets you can search for the number of repitions
"goodbye"  o{2}

combing repitions
[ab]{2} matches any 2 occurences of a and/or b

the + one or more of a char [ab]+ will match "aab" and "abb"
the * zero or more of a char [ab]* will match ab & aab

The optional char is the ?
denotes a char ay or may not be present
a?c will match abc & ac

Starting & ending:
^and$
^ is the symbol for the start of a string (only outside [])
$ is the symbol fir the end of the string

"Hello World" "Goodbye Hello"
to match the 1st string, we can use ^Hello to only match the string that starts with Hello
to match the 2nd string, we can use Hello$ to only match the string that ends with Hello
You can also combine to find excatly the pattern you're looking for: ^Hello World$

Whitespace
\s matches any 1 white space char (newline, tab,space)
\$ will match any non Whitespace char

How to use in javascript: 2 ways
var re1= new RegExp('abc');
var re2= /abc/

Flags to regex:
g -> Global will continue to search after the 1st match "will find all the matches"
i -> case insensative
var re1= new RegExp('abc', 'gi');
var re2= /abc/gi

*/
//test returns true or false: you call on a regex
// var re1= new RegExp('abc', 'g');
// var re2= /abc/g;
// var re3= /ABC/gi;
//
// console.log(re1.test('abc123abc123'));
// console.log(re1.test('ab1c'));
//
// console.log(re2.test('abc123abc123'));
// console.log(re2.test('ab1c'));
//
// console.log(re3.test('abc123abc123'));
// console.log(re3.test('ab1c'));

//match searches for the pattern we dfine and return 1 or every occurence we define /depending on global Flags
//an array of matches returned
//will return null if no matches
//you call on the string not on the regex

var re1 = new RegExp('test');
var re2 = new RegExp('test', 'g');
var re3 = new RegExp('te*st', 'g');

var firstString = 'This is a test string test string';
var secondString= "This is a test string tester testing";
var thirdString = "This is a teeeeeeeeeest string teeeeeeeeeester teeeeeeesting";

console.log(firstString.match(re1)); //[ 'test', index: 10, input: 'This is a test string test string' ]
console.log(firstString.match(re2)); //[ 'test', 'test' ]
console.log(firstString.match(re2).length); //2

console.log(secondString.match(re1)); //[ 'test', index: 10, input: 'This is a test string tester testing' ]
console.log(secondString.match(re2)); //[ 'test', 'test', 'test' ]
console.log(secondString.match(re2).length); //3

console.log(thirdString.match(re3)); //[ 'teeeeeeeeeest', 'teeeeeeeeeest', 'teeeeeeest' ]
console.log(thirdString.match(re3).length); //3

//search will return the index of the 1st match and return -1 if it doesn't match
//also called on string not the regex
//global won't effect since it only returns index of the 1st match
console.log(firstString.search(re1));

//replace- useful for muniplulating text
//a method on the string not the regex

var re1= /grape/gi;
var replacement ='apple';
var firstString1 = "grapes are small round fruits that can be different colors";

console.log(firstString1.replace(re1, replacement))
//1st is what you want to replace
//2nd is what you want to replace with (will do every instances)

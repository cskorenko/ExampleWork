// scope practice
//write a fn that accepts an array of words & returns a string that is a sentence
//Be sure to include a period at the end. As this is practice using the concept scope
//please don;t use array's 'join' method

/*
const sentenceArray = ['Here', 'is', 'a', 'sentence'];

function makeASentence (array) {
let mySentence = '';

for (let i = 0; i < array.length; i++) {
   mySentence += array[i];
if (i < (array.length - 1)) {
   mySentence += ' ';
 }
 }
   mySentence += '.';

 return mySentence;
}
console.log(makeASentence(sentenceArray));
*/

/* create a function that accepts a sentence as strings and returns the
longest word in the sentence as a string with just the word

let mySentence = 'This is my sentence';

function findLongestWord (string) {
  const str = string.split(" ");
  let longest = str[0];
for (let i = 0; i <= str.length; i++) {
  if (str[i] > longest) {
    longest = str[i];
  }
}
return longest;
}
console.log(findLongestWord(mySentence));
*/

// I need to pull out only numbers from the string
// keep any 10 digit numbers
//11 digit numbers keep if start with 1 and remove the 1
//bad numbers 10 '0'

//my attempt
function validatePhoneNumber(number) {
  const individualNumbers= number.split('');
  let onlyNumbers = [];

for (let i = 0; i <= individualNumbers.length; i++) {
  if (parseInt(individualNumbers[i], 10) || individualNumbers[i] === '0') {
  onlyNumbers.push(individualNumbers[i]);
}
console.log(onlyNumbers);

}

if (onlyNumbers.length < 9) {
  console.log("0000000000");
} else if (onlyNumbers.length === 9) {
  console.log(onlyNumbers);
} else if (onlyNumbers.length === 10) {
  if (onlyNumbers[0] === 1){
   onlyNumbers.shift(onlyNumbers[0]);
   console.log(onlyNumbers);
  }  else {
      console.log("0000000000")
    }

  console.log("0000000000")
}

}

console.log(validatePhoneNumber('(123) 456-7890'));
console.log(validatePhoneNumber('123.456.7890'));
console.log(validatePhoneNumber('11234567890'));
console.log(validatePhoneNumber('21234567890'));
console.log(validatePhoneNumber('123456789'));
console.log(validatePhoneNumber('212345678901234'));

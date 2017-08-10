//write a fn that accepts a num & uses regex to see if that number
//begins with a 1, 2, or 3 and returns true if it does otherwise return false

// function validateNumber (num) {
//   let re1= /^[123]/;
//   return re1.test(num);
// }
//
// console.log(validateNumber(123)); // true
// console.log(validateNumber(248)); // true
// console.log(validateNumber(8)); // false
// console.log(validateNumber(321)); // true
// console.log(validateNumber(9453)); // false


//write a fn that accepts a num & uses regexp if the code ends with a 1,2,3

// function validateNumber2 (num) {
//   let re2= /[123]$/;
//   return re2.test(num);
// }
//
// console.log(validateNumber2(123)); // true
// console.log(validateNumber2(248)); //false
// console.log(validateNumber2(8));  //false
// console.log(validateNumber2(321));  //true
// console.log(validateNumber2(9453)); //true

//write a fn that accepts a string & return true if its a digit

// function myIsDigit (digit) {
//   let re1= /^\d$/
//   return re1.test(digit);
// }
//
// console.log(myIsDigit('')); // false
// console.log(myIsDigit('7')); // true
// console.log(myIsDigit(' ')); // false
// console.log(myIsDigit('a')); // false
// console.log(myIsDigit('2')); // true
// console.log(myIsDigit('a5')); // false
// console.log(myIsDigit('14')); // false

//write a fn that accepts a date and checks to see if the date is formated
//'00-00-0000 00:00'

// function dateChecker (date) {
//   let re1= /\d{2}-\d{2}-\d{4}\s\d{2}:\d{2}/
//   return re1.test(date);
// }
//
// console.log(dateChecker('01-09-2016 01:20')); //true
// console.log(dateChecker('01-09-2016 01;20')); //false
// console.log(dateChecker('01_09_2016 01:20')); //false
// console.log(dateChecker('14-10-1066 12:00')); //true
// console.log(dateChecker('Tenth of January')); //false
//
// //write a fn that takes a string & count num of vowels that show up in the string provided
//
// function countVowels (volString) {
//   let re2= /[aeiou]/gi;
//   let re3= /[a-z]/g;
//   let lowerCase= volString.match(re3);
//   let volCount= volString.match(re2);
//
//   //let volCount= volString.match(/[aeiou]/gi);
//
//     if(volCount) {
//       console.log(volCount.length);
//     } else {
//       console.log(0);
//     }
//
//     if(lowerCase) {
//       console.log(lowerCase.length);
//     } else {
//       console.log(0);
//     }
// }
//
// countVowels('bbababba');   // 3
// countVowels('hellohellohellohello');   // 8
// countVowels('krtmndsptzxvbmnwrt');   // 0
// countVowels('asljdflsajfieworiuewnvndsfbawofejawefjiofajdsdf');    // 16
// countVowels('asljdflsAjfiewOriuEwnvndsfbawofejawefjIOfajdsdf');    // 16

//write a fn that accepts an array of strings that are file names- only pull the files that end with
//.png and return them in an array.

function findPNG (fileArray) {
let filesPass= [];

for(let i=0; i < fileArray.length; i++) {
  let thisFile= fileArray[i].match(/png$/);
    if(thisFile) {
      filesPass.push(fileArray[i]);
    }
  }
return filesPass;
}

console.log(findPNG(['img01.jpeg', 'file.png', 'xrf214579.gif', 'image.png', 'dogs.tif']));
// ['file.png', 'image.png']
console.log(findPNG(['asfldjasdfjpng.jpeg', 'pngsagsdfj.png', '.pngsdfasdfsaf.gif', '.pngasdfasifsda.png', 'uiuiuiiaisdfi.tif']));
// ['pngsagsdfj.png', '.pngasdfasifsda.png']

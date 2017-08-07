//write a function that accepts a # and a string & return the string for the repeat
// times of the number passed in
/*
function repeatString(number, string) {
let newString= '';

  for (let i = 0; i < number; i++) {
    newString += string;
  }
return newString;
}

console.log(repeatString(1, 'hello'));      // 'hello'
console.log(repeatString(2, 'world'));      // 'worldworld'
*/
//string operation/function that does same thing as above
//string.repeat(number);

//write a function that accepts 3 int: min, max, step & return an array where
// the 1st element is the min and each elemt after is counted up by the step
//until max is reached
/*
function generateRange (min, max, step) {
let newArray= [];

  for (let i = min; i <= max; i += step) {
    newArray.push(i);
  }
  return newArray;
}

console.log(generateRange(2, 10, 2)); // [2, 4, 6, 8, 10]
console.log(generateRange(1, 10, 3)); // [1, 4, 7, 10]
console.log(generateRange(19, 49, 2)); // [19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49]
console.log(generateRange(10, 82, 9)); // [10, 19, 28, 37, 46, 55, 64, 73, 82]
*/

//write a function which tells if the list array is empty or contains only 1 element or more
/*
function describeList (array) {
let arrayLength = '';

  if (array.length >= 2){
    arrayLength = 'longer';
  } else if (array.length === 1){
    arrayLength = 'singleton';
  } else if (array.length === 0){
    arrayLength = 'empty';
  }
  return arrayLength;
}

console.log(describeList([]));          // "empty"
console.log(describeList([1]));         // "singleton"
console.log(describeList([1,2]));       // "longer"
console.log(describeList([]));          // "empty"
console.log(describeList([1.5]));       // "singleton"
console.log(describeList([1.5,2.5]));   // "longer"
*/

// exercise close to actual work (username & passwords match criteria)
//write a function that accepts a string of usernames & pass guidelines
//between 6-10 charcaters; contain at least 1 lowercase; contains at least 1 number
// && only contains only numbers & lowercase letters
// true if matches all criteria false if not
//charcode for upper or lower
//loop through each letter in each array
/*
function authList (array) {
let isValid= [];

  for(let i = 0; i < array.length; i++) {
    let validLength = false;
    let validLowercase = false;
    let validNumber = false;
    let validChars = true;

    if(array[i].length >= 6 && array[i].length <= 10) {
      validLength = true;
    }

    for(let j= 0; j < array[i].length; j++) {
      let charCode = array[i].charCodeAt(j);

      if(array[i][j] >= 0 && array[i][j] <= 9) {
        validNumber = true;
      }

      if(charCode <= 47) {
        validChars = false;
      } else if (charCode > 57 && charCode < 97) {
        validChars = false;
      } else if (charCode > 122) {
        validChars = false;
      }
// if ()(charCode >=97 && charCode <= 122) && !validNumber) ^^^^

      if (charCode >= 97 && charCode <= 122)
        validLowerCase = true;
      }

      if (validChars && validLowerCase && validNumber && validLength) {
        isValid.push(true);
      }
  }
 return isValid.length == array.length;
}

console.log(authList(['john123', 'alex222', 'sandra1']));    // returns true
console.log(authList(['john123', 'alex222', 'sandraW']));    // returns false because sandraW has no number
console.log(authList(['john_123', 'alex222', 'sandra1']));   // returns false because john_123 contains an invalid character
*/

/* break up functions into smaller pieces that can be reused
exercise: creat function that accepts a sigle char string as an agrument
return: 'letter is uppercase' if UC
return: 'letter is lowercase' if LC
return: 'not a number'
*/
/* how we have been doing not easiest way to read it
function printCase(letter) {
  if (letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90) {
    return 'letter is uppercase'
  } else if (letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122) {
    return 'letter is lowercase'
  } else {
    return 'not a letter';
  }
}
*/

//best way to isolate our code into individual components
/*
function isUppercase(letter) {
  let charCode = letter.charCodeAt(0);
  if (charCode >= 65 && charCode <= 90) {
    return true;
  } else {
    return false;
  }
}

  function isLowercase(letter) {
    let charCode = letter.charCodeAt(0);
    if (charCode >= 97 && charCode <= 122) {
      return true;
    } else {
      return false;
    }
  }

  function printCase(letter) {
    if (isUppercase(letter)) {
      return 'letter is uppercase'
    } else if (isLowercase(letter)) {
      return 'letter is lowercase'
    } else {
      return 'not a letter';
    }
}
  console.log(printCase("A"));
  console.log(printCase("b"));
  console.log(printCase("1"));
*/


// write a function that reverse upper & lowercase letters
/*
function lowerCase(letter) {
  if (letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122) {
    return true;
  } else {
    return false;
  }
}

function upperCase(letter) {
  if (letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90) {
    return true;
  } else {
    return false;
  }
}

function alternateCase(inputString) {
  let stringArray = inputString.split('');
  let alternateStringArray =[];

  for(let i = 0; i < stringArray.length; i++) {
    if(lowerCase(stringArray[i])) {
      alternateStringArray.push(stringArray[i].toUpperCase());
    } else if(upperCase(stringArray[i])) {
      alternateStringArray.push(stringArray[i].toLowerCase());
    } else {
      alternateStringArray.push(stringArray[i]);
    }
  }
  return alternateStringArray.join('');
}


console.log(alternateCase('hello world'));      // HELLO WORLD
console.log(alternateCase('HELLO WORLD'));      // hello world
console.log(alternateCase('hello WORLD'));      // HELLO world
console.log(alternateCase('HeLLo WoRLD'));      // hEllO wOrld
console.log(alternateCase('12345'));            // 12345
console.log(alternateCase('1a2b3c4d5e'));       // 1A2B3C4D5E
console.log(alternateCase('String.prototype.charCodeAt'));  // sTRING.PROTOTYPE.CHARcODEaT
console.log(alternateCase(alternateCase('Hello World')));  // Hello World ```
*/

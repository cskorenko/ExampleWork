//write a fn that takes an array containing one neddle
//after function finds the needle it should return the message (as a string)
//that says: 'found needle at position' and index it found the needle in
/*
function findNeedle (array) {
let needleIndex= 0;
  for (let i= 0; i< array.length; i++) {
    if (array[i] === 'needle') {
      needleIndex= i;
    }
  }
  return 'found the needle at position ' + needleIndex;
}

console.log(findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']));
*/

/*The best way to have a productive day is to plan out your work schedule.
Given the following three inputs, create an an array of time allotted to work,
broken up with time allotted with breaks:

- Input 1: Hours - Number of hours available to you to get your work done!
- Input 2: Tasks - How many tasks you have to do throughout the day
- Input 3: Duration (minutes)- How long each of your tasks will take to complete

Criteria to bear in mind:

- Your schedule should start with work and end with work.
- It should also be in minutes, rounded to the nearest whole minute.
- If your work is going to take more time than you have, return “You’re not sleeping tonight!”
*/


//function dayPlan(hours, tasks, duration) {
// Overall goals: create an array that stores my plan
//alternate btw work & break time: have to start & end with work
// number of breaks is 1 less than number of tasks
//number of items in my array are the number of tasks + number of breaks
//determine total minutes I will work (hour * 60)
//total time have to spend doing work today (tasks * duration)
//determine the remaining time (total time- total time work takes) (in this case return string)
//amount of time that I want to take for break (time remaing/# of breaks through the dayPlan)
//how many total items in plan (# of tasks + # of breaks)
//create an array to store plan
//if remaining time is less then 0 - print string (not sleeping tonight)
//loop through # of times to build out plan = to plan length
  //for each iteration:
    //how do I know which items are work & which are breaks
    //if index is odd push duration onto array
    //else push break time onto array
//return plan
/*
let myPlan = [];
let numberBreaks= tasks -1;
let numberItems= numberBreaks + tasks;
let minutesWillWork= hours * 60;
let minutesOfWork= (duration * tasks);
let remainingTime= minutesWillWork - minutesOfWork;
let breaksDuration= Math.ceil(remainingTime/numberBreaks);

if(remainingTime < 0) {
  return 'You’re not sleeping tonight!';
}

for (let i= 1; i <= numberItems; i++) {
  if(i % 2 !== 0){
    myPlan.push(duration);
  } else {
    myPlan.push(breaksDuration);
  }
}

return myPlan;
}

console.log(dayPlan(8, 5, 30));   // [30, 83, 30, 83, 30, 83, 30, 83, 30]
console.log(dayPlan(3, 5, 60));   // 'You're not sleeping tonight!'
console.log(dayPlan(2, 2, 60));   // [60, 0, 60]
*/

// given a string of spaced seperated numbers, return lowest & highest numbers

////create var to hold highest number at 0
//create var to hold lowest number;
//convert the string to array
//loop through the stringArray
//have lowestNumber be equal to stringArray[0] index
  //if the stringArray[i] is a number && > highest number
    //  then replace highest number with i
  //if stringArray is a number && < lowestNumber
    //then replace with i
//return a string with highest number + lowest number
/*
let highestNumber= 0;
let lowestNumber= 9;
string= string.split(' ');


for (let i =0; i <= string.length; i++) {
  if(string[i] >= highestNumber) {
    highestNumber = string[i];
  }

  if (string[i] <= lowestNumber) {
    lowestNumber = string[i];
  }
}

  return highestNumber + ' ' + lowestNumber;
}
console.log(highAndLow("1 2 3 2 5")); // return "5 1"
console.log(highAndLow("1 2 7 4 5")); // return "7 1"
console.log(highAndLow("1 9 3 4 8")); // return "9 1"
*/

//write a fn that accepts: current population, growth percentage, incoming residents
//population goal
//find number of years it will take the town to reach its population goal

/*
function howManyYears(beginningPopulation, percent, increase, targetPopulation) {
//create a number of years var= 0;
//create a var for currentPopulation= beginningPopulation
//loop while currentPopulation < targetPopulation
  //have currentPopulation * percent for each loop
  //increase the new currentPopulation by increase per loop
  //add a year to number of years var
//return number of years

let numberOfYears= 0;
let currentPopulation= beginningPopulation;
let percentNumber= percent/100;

while (currentPopulation < targetPopulation) {
  currentPopulation= currentPopulation + (currentPopulation * percentNumber) + increase;
  numberOfYears += 1;
}


 return numberOfYears;

}

console.log(howManyYears(1500, 5, 100, 5000)); // 15
console.log(howManyYears(1500000, 2.5, 10000, 2000000)); // 10
console.log(howManyYears(1500000, 0.25, 1000, 2000000)); // 94
*/

/* write a fn that accepts an array of objects, containing data about develpoers who have signed
up that you are organizing

task is to return an array which includes the developer who is the oldest.
In case of duplicate list in the same order as they appear in original array
*/
'use strict';
/*
function developInfo (array) {

let maxAge= 0;
let maxArray= [];

  for (let i = 0; i < array.length; i++) {
      if (array[i].age > maxAge) {
        maxAge= array[i].age;
      }
  }

  for (let j = 0; j < array.length; j++) {
      if(array[j].age === maxAge) {
        maxArray.push(array[j]);
      }

  }
    return maxArray;
  }


var listOne = [
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
  { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
  { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
];

var listTwo = [
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 54, language: 'PHP' },
  { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
  { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 30, language: 'PHP' },
];

var listThree = [
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 25, language: 'PHP' },
  { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
  { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 30, language: 'PHP' },
];

console.log(developInfo(listOne));
console.log(developInfo(listTwo));
console.log(developInfo(listThree));

*/
/* -The word should have 'n' vowels, may be repeated, for example in "engineering", n=5;
- The word should have 'm' consonants, may also be repeated: in ^ m=6;
- The word should not have some forbidden letters
-Create a function that receives 4 arguments in the order given above 'wantedWords(list, vowels, consonants, forbiddenletter)'
and output an array with the word (or words) having the words in the order given
In the pre-loaded lost. If no words are found, return an empty array
*/

var wordList = ["strength", "afterwards", "background", "photograph", "successful", "understand"];

function wantedWords (list, vowels, consonants, forbiddenLetter) {
let passedWords= [];
  for (let i=0; i < list.length; i++) {
   //if(list[i].includes(forbiddenLetter[0]) || list[i].includes(forbiddenLetter[1])) {
    // list.splice(i, 1);
    // i--;
  // }

      let vowelsCount= 0;
      let consonantsCount= 0;

  for(let j=0; j< list[i].length; j++) {
      if(list[i][j] === 'a' || list[i][j] === 'e' || list[i][j] === 'i' || list[i][j] === 'o' || list[i][j] === 'u') {
        vowelsCount += 1;
      } else if (list[i].includes(forbiddenLetter[0]) || list[i].includes(forbiddenLetter[1])) {
        return passedWords;
      } else {
        consonantsCount += 1;
      }
  }

  

  if(vowelsCount === vowels && consonantsCount === consonants) {
    passedWords.push(list[i]);
  }

}
return passedWords;
}

console.log(wantedWords(wordList, 1, 7, ['m', 'y']));     // ['strength']
console.log(wantedWords(wordList, 3, 7, ['m', 'y']));     // ['afterwards', 'background', 'photograph', 'successful', 'understand']
console.log(wantedWords(wordList, 3, 7, ['a', 's' , 'm', 'y']));    // []

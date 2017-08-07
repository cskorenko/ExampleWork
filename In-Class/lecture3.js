//Lecture 3: Exercise 1
//SyntaxError
//Unexpected token o in JSON at position 1
//Line 13
//convertJSON

//Lecture 3: Exercise 2
let dependentBoolean = false;

do {
  console.log('in true false loop: ', isSomethingTrue);
  dependentBoolean= false;
} while (dependentBoolean);

console.log('after while loop');

//Lecture 3: Exercise 3
const myArray = [1,2,3,4,5,6,7,8,9,10];

for (let i= 0; i <= myArray.length; i++) {
  console.log(i);
};

console.log('I can count to 10:' + myArray);

//Lecture 3: Exercise 4
const myFavorites= {
  'color' : 'Purple',
  'tv show' : 'Friends',
  'food' : 'Chocolate',
  'number' : '8',
  'movie' : 'Beauty and the Beast'
};

for (properties in myFavorites) {
  console.log(properties);
}

//Lecture 3: Exercise 5
const myNumberArray = [1,2,3,4,5,6,7,8,9,10];
const doubled = [];

for (let i= 0; i < myNumberArray.length; i++) {
  doubled.push(myNumberArray[i] * 2);
}

console.log(doubled);

//Lecture 3:  Exercise 6
const myArr= ['Hello', 'Goodbye', 'Yes', 'No', 'Done'];
let i = 0

while (i < myArr.length) {
  console.log(myArr[i]);
  i++
}

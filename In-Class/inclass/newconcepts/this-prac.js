/*create and obj with 2 prop that contain strings & a 3rd prop that is a fn
that prints values of the first two out using this, then invoke the function*/

function myFunc() {
  console.log(this.prop1 + " " + this.prop2);
}

let myObj = {
  prop1: 'Hello',
  prop2: 'World',
  myFunc: myFunc
};

myObj.myFunc();


//complete the following snippet:
let myNum = {
  num: 8
};

function addTwo() {
  console.log(this.num + 2)
}

addTwo.call(myNum);

//code snippet: how could we call getFullName, but force its this to be a different
//context than person.  Find mutliple solutions.

let person = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName: function () {
    return this.firstName + ' ' + this.lastName;
  }
}

let otherPerson = {
  firstName: 'Jane',
  lastName: 'Smith'
}

let morePeople = {
  firstName: 'Nancy',
  lastName: 'Morgan'
}

console.log(person.getFullName());
console.log(person.getFullName.call(otherPerson));
console.log(person.getFullName.apply(morePeople));

let thirdPerson = {
  firstName: 'Susie',
  lastName: 'Law'
}

let myBind= person.getFullName.bind(thirdPerson);
let b= myBind();
console.log(b);

function car(color, numDoors) {
  this.color = color;
  this.numDoors = numDoors;
}

var myCar= new car('purple', 4);
var myNewCar= new car('blue', 2);

console.log(myCar.color);
console.log(myNewCar);

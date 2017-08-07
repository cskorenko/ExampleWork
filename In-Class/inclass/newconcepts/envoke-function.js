'use strict';

let myObj = {
  a: 5,
  b: 6
}

function add(c, d) {
  return this.a + this.b + c + d;

}

console.log(add.call(myObj, 3, 4));

//use add.call method to envoke add: first parameter will represent this keywork this
//when you log this keyword, it logs the object (the value & the assigned property)
//.call to envoke a function says the 1st parameter will act as the this keyword
//.apply parament 1 acts as the this key word rest of the parameters go in an array
//add.apply(myObj, [3,4]);

//apply & call are 2 diff ways to envoke a function and manipulate the value of this

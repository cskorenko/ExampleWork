'use strict';
//prototype
/* Inheritance: An object gets access to the properties and methods of another object
Method: all methods are fn but not all fn are methods

Classical Inheritance: The inheritance way used for class-based languages like C++ or Java.
  Class: The deff of all of the properties (data) and methods (fn) that characterize a certain
  set of objects.
  Class is not a object but rather the abstraction of the object it is supposed to represent
  Instance: create objects that form to a class: the instantiation of  class. An instance has exactly
  the same properties and methods of its parent
  Classical Inheritance: is the sharing of the props of methods of one class with another

^^^Javascript is not like that

prototype: the internal property created when an object is created. This prop simply link to anotherobj.
prototype inheritance: One construct : the object
  Each obj has an internallink to another obj called its prototype
prototype chain: each prototype object has a prototype of its own and so on until an object is reached
with null as its prototype
  null has no prototype of its own and acts as the final link in the chain


let myProtoObj = {
  b: 3,
  c: 4
};

let myObj = Object.create(myProtoObj);
myObj.a = 1;
myObj.b = 2;

//prototype chain
// my Obj -> myProtoObj -> Object -> null
console.log(myObj.a); // 1
console.log(myObj.b); //2
console.log(myProtoObj.b); //3
console.log(myObj.__proto__.b) //DON'T DO!!!!!!! 3
console.log(myObj.c); //4
*/

// let person = {
//   firstName: 'Default',
//   lastName: 'Default',
//   getFullName: function () {
//     return this.firstName + ' ' + this.lastName;
//   }
//   //ES6 getFullName() {
//   //}
// };
//
// let john = Object.create(person);
// john.firstName= 'John';
// john.lastName= 'Doe';
// console.log(john.getFullName()); // John Doe
//
// let jane = Object.create(person);
// jane.firstName= 'Jane';
// console.log(jane.getFullName());

/* Everything in JS is an Object (except primatives)
Objects: are collections of props & values. These props can be data or they can be functions(called methods)
Functions: are objects. everyyou can do with an object you can do with a fn
  fn can be assigned vars, passed around as parameters and created on the fly
  fns inherit from the fn prototype which inherits from the obj prototype
Methods: JS doen't have methods in the same way the class-based langs define them. JS any fn can
be added to an object in the form of a prop, and fns defined this way are called methods
  An inhertied fn acts just as any other prop, including prop shadowing, which in this case, is a
  form of method overriding.
Object.prototype: when a prop or method not found on the object, JS will look up the chain to find if the prop exists
Viewing prototype Information: example in web not node

let person = {
  firstName: 'Default',
  lastName: 'Default',
  getFullName: function () {
    return this.firstName + ' ' + this.lastName;
  }
  //ES6 getFullName() {
  //}
};
console.log('person:');
console.log(person);
 in es6 you can do Object.getPrototypeof(person);

if an object hasa property on itself in the prototype chain

*/
// let myProtoObj = {
//   b: 3,
//   c: 4
// };
//
// let myObj= Object.create(myProtoObj);
// myObj.a =1;
// myObj.b =2;
//
// console.log(myObj.a);
// console.log(myObj.hasOwnProperty('a'));
// console.log(myObj.c);
// console.log(myObj.hasOwnProperty('c')); //gets false since myObj does not explicity have that property
// console.log(myObj.valueOf());
// console.log(myObj.hasOwnProperty('valueOf'));

/* You can modify the property which is called monkey patching(dangerous & easy to mess up on).
Generally should not be done only good reason is if you writing JS that is going to be running
with old version on node

String.prototype.trim = function () {
  return this.replace(/^\s+|\s+$/g, '');
}
*/
//capital name if its the prototype- how you can create a prototype
// function Rocket () {
//
// }
//
// Rocket.prototype.thrusters = 4;
//
// let myRocket= new Rocket ();
// console.log(myRocket.thrusters);

//Instance of test
// function MyProto() {
//
// };
//
// function MyOtherProto () {
//
// };
//
// let myProtoObj = new MyProto();
// let MyOtherProto =  new MyOtherProto();
//
// console.log(myProtoObj instanceof MyProto); //true
// console.log(myProtoObj instanceof MyOtherProto); //false
// console.log(myProtoObj instanceof Object); //true

//prototype example with data strcture
// function Person () {
//   this.name = '';
// }
//
// function Child () {
//   Person.call(this);
//   this.gradeInSchool = '';
// }
// Child.prototype = Object.create(Person.prototype);
//
// let jenny = new Child()
// ;
// jenny.name= 'Jenny';
// jenny.gradeInSchool= 1;
// // console.log(jenny);
//
// //a way to not have to define each value in the method individually
// function Employee(name, idNumber, department) {
//   this.name= name;
//   this.idNumber= idNumber;
//   this.department= department;
// }
//
// function Manager(name, idNumber, department, reports) {
//   Employee.call(this, name, idNumber, department);
//   this.reports= reports;
// }
// Manager.prototype = new Employee;
//
// function Engineer(name, idNumber, department, specialty) {
//   Employee.call(this, name, idNumber, department);
//   this.specialty= specialty;
// //function returns boolean if they like JS or not (computer=true others false)
//   this.likeJS= function () {
//     return (this.specialty.toLowerCase() === 'computer');
// }
// Engineer.prototype= new Employee;
//
// function EngineerIntern(name, idNumber, department, specialty, mentor) {
//   Engineer.call(this, name, idNumber, department, specialty);
//   this.mentor= mentor;
// }
// EngineerIntern.prototype= new Engineer;
//
// function SalesPerson(name, idNumber, department, quota) {
//   Employee.call(this, name, idNumber, department);
//   this.quota= quota;
//   this.didMeetQuota= function(actualSales) {
//     if(actualSales >= this.quota) {
//       return true;
//     }
//   }
// }
// SalesPerson.prototype= new Employee;
//
// function SalesIntern(name, idNumber, department, quota, mentor, role) {
//   SalesPerson.call(this, name, idNumber, department, quota);
//   this.mentor= mentor;
//   this.role= role;
// }
// SalesIntern.prototype= new SalesPerson;


// let samantha = new Engineer("Samantha Jones", "123", "Technology", "Electrical");
// console.log(samantha);
// console.log(samantha.likeJS());
//
// let oscar= new Engineer('Oscar', 789, "Technology", "Computer");
// console.log(oscar)
// console.log(oscar.likeJS());
//
// // let jennifer= new Manager('Jennifer', 456, 'Technology', [123, 789]);
// // console.log(jennifer);
//
// let jeff= new EngineerIntern ('Jeff', 147, 'Technology', 'Computer', 'Oscar');
// console.log(jeff);
// console.log(jeff.likeJS());

// let ting= new SalesPerson('Ting', 865, 'Sales Team', 300);
// console.log(ting);
// console.log(ting.didMeetQuota(301));
//
// let ben= new SalesIntern('Ben', 987, 'Sales Team', 150, 'Ting', 'Intern');
// console.log(ben);

// es6 changes and ways to do above (creating a prototype)
//class not a real class in classical inheritance
//class keywrod lets you make prototype relations behind the scene

//unnamed class expression;
//named would be var Rectangle = class Rectangle
class Rectangle {
  constructor(height, width) {
    this.height= height;
    this.width= width;
  }
//get the area prop on this rect class
  get area () {
    return this.calculateArea();
  }
  calculateArea() {
    return this.height * this.width;
  }
}

let myRect = new Rectangle(10, 15);
console.log(myRect);
console.log(myRect.calculateArea());
console.log(myRect.area);

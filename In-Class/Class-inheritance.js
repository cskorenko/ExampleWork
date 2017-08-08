//prototype review & es6
//Class Decleration
// class Rectangle {
//   constructor(height, width) {
//     this.height= height;
//     this.width= width;
//   }
//   //specific type of method that creates new instance of type of object
//
//   calcArea() {
//     return this.height * this.width;
//   }
//
//   get area () {
//     return this.height * this.width;
//   }
//
// }
//
// let myRect= new Rectangle(5,9);
// console.log(myRect.calcArea());
// console.log(myRect.area); //treated like a static prop
//
// //Class expressions (can be named or unnamed)
// let Rectangular = class {
//   //same stuff inside it as above just making it an expressions/var
// }

//body of all classes are excuted in strict mode by default


//how can you add static methods to a class
//example of static method: calling on the array



const exampleArray = [6,9, 2, 4, 7, 1, 2]

console.log(exampleArray.join());
//join is an instance method- called on an instance of the obj in question
//join won't work on non arrays
console.log(Array.isArray(exampleArray));
//returns a boolean //a static method
// static exists whether we have an array or not (can call on anything)

class Point {
  constructor(x, y) {
    this.x= x;
    this.y= y;
  }

  static distance (a, b) {
  //static method
    const dx= a.x - b.x;
    const dy= a.y - b.y;

    return Math.hypot(dx, dy);
  }

  pointDistance (b) {
    //instance method
    const dx= this.x - b.x;
    const dy= this.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1= new Point (2, 3);
const p2= new Point (5, 1);
console.log(p1.pointDistance(p2)); //Instance method
console.log(Point.distance(p1, p2)); //static method

//normal class(prototype manual)
class Animal {
  constructor (name) {
    this.name= name;
  }

  speak () {
    console.log(this.name + 'makes a noise');
  }
}

let socks= new Animal ('Socks');
socks.speak();
//extends example below:
//you can't extend prototypes as objects
class Cat extends Animal {
  speak () {
    console.log(this.name + ' meows');
  }
}

let thorvald= new Cat('Thorvald');
thorvald.speak();


class Rectangle {
  constructor(height, width) {
    this.height= height;
    this.width= width;
  }
  //specific type of method that creates new instance of type of object

  calcArea() {
    return this.height * this.width;
  }
}

  class Square extends Rectangle {
    constructor(side) {
      super(side, side);
      //call the instructor of its immediate parent
    }
  }

let mySquare= new Square(5);
console.log(mySquare.calcArea());



//class instead of prototype in es6
class Employee {
  constructor (name, idNumber, department) {
      this.name= name;
      this.idNumber= idNumber;
      this.department= department;
  }
}

class Manager extends Employee {
  constructor(name, idNumber, department, reports) {
    super(name, idNumber, department);
    this.reports= reports;
  }
}

class Engineer extends Employee {
  constructor(name, idNumber, department, specialty) {
    super(name, idNumber, department);
    this.specialty= specialty;
  }

  likeJS () {
    return (this.specialty.toLowerCase() === 'computer');
  }
}

class EngineerIntern extends Engineer {
  constructor(name, idNumber, department, specialty, mentor) {
    super(name, idNumber, department, specialty);
    this.mentor= mentor;
  }
}

class SalesPerson extends Employee {
  constructor(name, idNumber, department, quota) {
    super(name, idNumber, department)
    this.quota= quota;
  }

  didMeetQuota (actualSales) {
      return (actualSales >= this.quota);
  }
}

class SalesIntern extends SalesPerson {
  constructor(name, idNumber, department, quota, mentor, role) {
    super(name, idNumber, department, quota);
    this.mentor= mentor;
    this.role= role;
  }
}

let samantha = new Engineer("Samantha Jones", "123", "Technology", "Electrical");
console.log(samantha);
console.log(samantha.likeJS());

let oscar= new Engineer('Oscar', 789, "Technology", "Computer");
console.log(oscar)
console.log(oscar.likeJS());

let jennifer= new Manager('Jennifer', 456, 'Technology', [123, 789]);
console.log(jennifer);

let jeff= new EngineerIntern ('Jeff', 147, 'Technology', 'Computer', 'Oscar');
console.log(jeff);
console.log(jeff.likeJS());

let ting= new SalesPerson('Ting', 865, 'Sales Team', 300);
console.log(ting);
console.log(ting.didMeetQuota(301));

let ben= new SalesIntern('Ben', 987, 'Sales Team', 150, 'Ting', 'Intern');
console.log(ben);
console.log(ben.didMeetQuota(149));

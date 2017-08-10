class Car {
  constructor (numWheels, topSpeed, color) {
  this.numWheels= numWheels;
  this.topSpeed= topSpeed;
  this.color= color;
  }
  travelSpeed () {
    return (.25 / this.topSpeed) * 3600 + ' seconds';
  }
}

let ford= new Car(4, 60, 'white');
console.log(ford);
console.log(ford.travelSpeed());

let honda= new Car(6, 120, 'purple');
console.log(honda);
console.log(honda.travelSpeed()); 

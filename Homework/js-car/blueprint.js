class Car {
  constructor (numWheels, topSpeed, color) {

    if(numWheels > 6) {
      this.numWheels = 6;
    } else if (numWheels < 0) {
      this.numWheels = 0;
    } else {
      this.numWheels= numWheels;
    }

  this.topSpeed= topSpeed;
  this.color= color;
  }
  travelSpeed () {
    return Math.round((.25 / this.topSpeed) * 3600) + ' seconds';
  }
}

let ford= new Car(8, 60, 'white');
console.log(ford);
console.log(ford.travelSpeed());

let honda= new Car(-1, 120, 'purple');
console.log(honda);
console.log(honda.travelSpeed());

let mazda= new Car(4, 190, 'black');
console.log(mazda);
console.log(mazda.travelSpeed());


var myVar = 'I am a string';

function myFunc () {
  console.log('I am a function');
};

function myFunc() {
  var myVar = 8;
  console.log('MY FUNC: ', myVar);
  myOtherFunc();
}

function myOtherFunc() {
  var myVar;
  console.log('MY OTHER FUNC: ', myVar);
}

var myVar = 3;
console.log('GLOBAL FIRST: ', myVar);
myFunc();
console.log('GLOBAL SECOND: ', myVar);

var num = 8;

function addTwo() {
  console.log(this.num + 2)
}

addTwo.call(this);

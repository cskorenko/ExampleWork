'use strict';

//hosting- decleration of functions & some vars are moved to the beginning
//of the scope when javascript is compiling
/*
function demoFunction(){
  console.log("Hi I'm a demo function!");
}
demoFunction();

can exsist like this:
*/
demoFunction();



//lots of code


function demoFunction(){
  console.log("Hi I'm a demo function!");
}

//when javascript engines will behave as if the code looks like the example
//above

//hosting only moves the decleration part not the assignment

var a = 5;

// hosting will seperate the var decleration to the top :
// var a;
//code
//a = 5;

/* var declerations are different from let:
they are hosted to the top so below will run;
if you use let it won't work
a = 5;
console.log(a);
var a;

var exampleFunction = function () {
decleration will be hosted of the function, but not the definition
};

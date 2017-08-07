//'use strict';

//execution context(wrapper that executes the code that is running)
//is an enviroment a function executes in
// similar to scope && concepeticual overlap but not same thing

//anything exisits in global
/*
const a = 3;

function demoFunction() {
  const b = 6;
}

//scope of b is demoFunction
//demoFunction would be called from global and create own demo fn context

demoFunction();
//diff contexts define diff values for the this. keyword
//in global this refers to the global object and depends if you run
//java in browser or node (in a browser its the window the javascript is running)

//this inside node globally regardless of strict mode is an empty object

console.log(this);
*/

function simpleCall () {
  console.log('simple call this:');
  console.log(this);
  //in node shows all the values of this: not in strict mode
  //in strict mode this shows up as undefined
}

simpleCall();

//global function exisits in global function
//innerfn & const a exists in the function globalFunction
/*

function globalFunction() {
  const a = 7;

    function innerFunction() {
      console.log(a);
    }

    return innerFunction;
}
//const remembers the innerFunction's scope & this is a closure
//closure straddles noun & verb
//const works as a proxy for global fn and globalFunction scope only through a closure
//closure is an instance of an internal scope being referenced from a global scope

const assignedFunction= globalFunction();
assignedFunction();
*/

let variableFunction;

function firstGlobalFunction() {
  const a = 7;

  function innerFunction () {
    console.log(a);
  }

  variableFunction = innerFunction;
}

function secondGlobalFunction () {
  variableFunction();

}

firstGlobalFunction();
secondGlobalFunction();

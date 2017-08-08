//a program technique in which a fn calls itself
//take a problem and break it down to a smaller version of it self all the way down till
//there is no more way to break down//fix the problem and work your way back up

//num will be a positive num
//num will decrease to 0 (num= 0 is my trivial case)

function recursivePrint(num) {
  if(num === 0) {
    console.log('BOOM!');
  } else {
    console.log(num);
    /* behind the scenes of the code:
      calling the fn with a num
        is the num === 0 NO:
          console.log & -1
        is the num === 0 NO:
          console.log & -1
    repeats and adds an instance to the fn until hit zero
      when it removes all the instances of its self back to the global
        console.log BOOM
      */
    recursivePrint(num -1);
    console.log(num);
      //doesn't reach the 2nd console.log until the if statment is reached zero in its 2nd fn call
      //remembers where it calls itself so we reach the 2nd console log once 0 is reached
      //then begin to reverse on the instances that are stacked on and log them off
  }
}

// recursivePrint(10);

//Factorial: n!= 1*2*3*4* .... *n

// where n is positive By def 0! = 1; doesn't work on negative numbers

//finding factorial through iterative solution
function factorial (num) {
if(num < 0) {
  return -1;
}

let newNum= 1;
  for(let i= 2; i <= num; i++) {
    newNum *= i;
  }
  return newNum;
}

console.log(factorial(3));

//find factorial through recursive

function factorialTwo (num) {
  if(num < 0) {
    return -1;
  }
  if(num === 0) {
    return 1;
  }

  return (num * factorialTwo(num-1));
}

console.log(factorialTwo(3));
console.log(factorialTwo(10));
console.log(factorialTwo(0));
console.log(factorialTwo(-3));

//Stack traces:
  //global execution context: calling factorialTwo for the 1st time with num=3
    //none of the checks pass so we return the value of 3 * factorialTwo(3-1)
      //none of the checks pass again then return 2 * call factorialTwo(2-1)
        //again none of the checks pass so return 1 * call factorialTwo (1-1)
          //fact n===0 so flat out return 1 by defs of math (end of inside fn) cuts off
          //n===0 pops off the Stacks
        //1 is return so we return to the 1 instance so return 1*1
      //return values flow down the execution Stacks


//Recusrion VS Iteration
  //recursion solutions are usually shorter
  //recursion is usually more diffuclt to design and test
  //recursion is more mathematical, usually considered more elegant
  //recursion can be more expensive than Iteration
  //Iteration feels less "magical"
  //Iterative solutions are usually easier, or at least faster, to understand
  //recursion can result in infinite function calls

//Fibonacci seq of int is the sum of the 2 preceeding
//interaction:
function fibonacci(n) {
  var a= 0;
  var b= 1;
  var f= 1;

  for(let i= 2; i<= n; i++) {
    f= a+b;
    a=b;
    b=f;
  }
  return f;
}

console.log(fibonacci(6));

//recursive:
function fibonacciTwo (n){
  if (n <= 2) {
    return 1;
  } else {
    return fibonacciTwo(n-2) + fibonacciTwo(n-1);
  }
}

console.log(fibonacciTwo(10));


//exercise: figure out what the stack flow looks like for recursive fn:
function gcd(a, b) {
  if(b === 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
}

console.log(gcd(20, 12));

/* call gcd(20,12)
a: 20; b: 12

call(gcd(12, 8))
a:12; b:8

call(gcd(8, 4))
a:8; b:4

call(gcd(4, 0))
a:4; b:0

return a= 4;
*/

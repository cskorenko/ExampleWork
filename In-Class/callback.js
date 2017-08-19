//Asynchronous Programming
/* synchoronous- only one process will execute at a time. Javascript is, you execute each
line in order one at a time
blocking- when a process is running, will be blocking if it prevents the further execution
of other code

Asynchronous- more than one process can run simultaneously
Node- is Asynchronous
non-blocking: code will continue execution without waiting for certain processes to complete
Thread- short for a thread of execytion, the way Asynchronous languages define themselves
into different tasks at the same time

Node Event Loop: allows us to write sync code and still respond to processes that are
running Asynchronous. Node handles Asynchronous processes and we don't have to worry about
how they effect each other

Callbacks: a fn that is passed s an arg of another fn which will be invoked at a later time
*/
//Callback example:
// const greet= function greet (callback) {
//   console.log('Hello');
//   callback();
// }
//
// greet(function() {
//   console.log('The callback was invoked')
// });
//
// greet(function() {
//   console.log('a different callback was invoked.')
// });

//Callbacks can take args:
// const greet= function(callback) {
//   console.log('Hello');
//
//   let data = {
//     firstname: 'Jennifer',
//     lastname: 'Smith'
//   };
//
//   callback(data);
// }
//
// greet(function (data) {
//   console.log('the callback was invoked, ' + data.firstname);
// });
//
// greet(function (data) {
//   console.log('the callback was invoked again, ' + data.lastname);
// });

//a fn with multple args, but only 1 is a callback:
const greet= function(name, callback) {
  console.log('Hello ' + name);

  let data= {
    firstname: 'Jennifer',
    lastname: 'Smith'
  };

  callback(data);
}

greet('Spruce', function(data) {
  console.log('the callback was invoked, ' + data.firstname);
});

// error handling (objs constrcted that can be passed in )

// 3 main ways to deliver errors:
// 1 - Throw the error (throw new err)
// 2 - Pass the Error to a Callback : the callback fn would be specifically for handling errors
// 3 - Emit an Error Event : use the event emitter to broadcast the error

//Types of Erros:
// 1 - Operational Error: problem with correctly written codes and not bugs in the software
    // - out of memory/ - too many files open/ - connection closed/ - invlaid user input
// 2 - Programmer Erros: bugs in the code that we written
    // - wrong variable name used/ - try to read a value from undefined variable

/*Handling Operational Errors:
  Proper Error Handling: can't be centralized
  Potential Approaches:
    - deal with failure directly: if it's clear fix the error
    - pass the failure to the client: don't know how to deal with error; if the resolve won't happen soon
    - Retry the operation: network errors or timeout
    - Let program crash:
    - Log the error and move on

  Handling Programmer Errors: Don't! Go fix the error
    -Best way is to crash and recover
      - unit test's

Error Delivery in-depth:
  - 3 main ways to deliver
    1- throw an error is for synchronously:
      - using try/catch block
      - error can be thrown in the same context where the fn was called
    2- callbacks to handle error asynchronously
      - check err arg in the callback
    3- emit an error event for complex syntax
      - database

*/

// asynchronously error example
// let fs = require('fs');
//
// let filepath = __dirname + '/somefile.txt'
//
// let stats = fs.stat(filepath, (error, stats) => {
//   if (error) {
//     console.log('ERROR');
//     console.log(error)
//   } else {
//     console.log('STATS');
//     console.log(stats);
//   }
// });

// try/catch block error example
// if you think something is going to fail write a try/catch block
// let fs = require('fs');
//
// let filepath = __dirname + '/baddata.json';
//
// let jsonData = fs.readFileSync(filepath, 'utf8');
//
// try {
//   console.log(JSON.parse(jsonData));
// } catch (e) {
//   console.log('ERROR');
//   console.log(e);
//   throw(e); // unhandled error/exception will crash application b/c its unhandled
// }
// // will run the rest of the application without crashing
// console.log('more code');

// programmer error handled incorrectly
// let fs = require('fs');
//
// // would just define variable instead of try/catch
// try {
//   let stats = fs.stat(filepath, (error, stats) => {
//     if (error) {
//       console.log('ERROR');
//       console.log(error);
//     } else {
//       console.log('STATS');
//       console.log(stats);
//     }
//   });
// } catch (e) {
//   console.log('caught error');
//   console.log(e);
// }

// provide error in synchronous example
// function divideSync (x, y) {
//   if (y == 0) {
//     throw new Error('can not divide by zero');
//   } else {
//     return x / y;
//   }
// }
//
// try {
//   let result = divideSync(4, 0);
//   console.log(result);
// } catch (e) {
//   console.log(e);
// }

// provide an error in an asynchronously manner

// function divideAsync(x, y, callback) {
//   if (y === 0) {
//     callback(new Error('can not divide by zero'));
//   } else {
//     callback(null, x/ y);
//   }
// }
//
// divideAsync(8, 4, (err, result) => {
//   if (err) {
//     console.log('x/0 = error', err);
//   } else {
//     console.log(result);
//   }
// })
//
// console.log('more code');

// event emitter error example

const EventEmitter = require('events');

// class is just class deff not an object to work with
class DividerEvent extends EventEmitter {
  divide(x, y) {
    if (y === 0) {
      let error = new Error('Can\'t divide by zero');
      this.emit('error', error);
    } else {
      this.emit('division', x / y);
    }

    return this;
  }
}

// have to make the obj below with new instance of the class created
let dividerEvent = new DividerEvent();

dividerEvent.on('error', (error) => {
  console.log('error');
  console.log(error);
});

dividerEvent.on('division', (result) => {
  console.log('result');
  console.log(result);
});

dividerEvent.divide(4, 2);
dividerEvent.divide(4, 0);
dividerEvent.divide(8, 2);

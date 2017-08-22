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

//Below example for blocking with fs
// let fs= require('fs');
//
// let contents= fs.readFileSync('textfile.txt', 'utf-8')
//
// console.log(contents);

//below example for Asynchronous:
// let fs= require('fs');
//
// console.log('BEFORE ASYNC CALL');
// fs.readFile('textfile.txt', 'utf-8', function(err, data) {
//   console.log('READ FILE CALLBACK')
//   console.log(data);
// })
//
// console.log('AFTER ASYNC CALL');

//using err- readFile on a file that doesn't exist
let fs= require('fs');

console.log('BEFORE ASYNC CALL');
fs.readFile('file.txt', 'utf-8', function(err, data) {
  if(err) {
    console.log('ERROR');
    console.log(err);
    return
  }
  console.log('READ FILE CALLBACK')
  console.log(data);
})

console.log('AFTER ASYNC CALL');


//Problems with callbacks- callback hell or pyramid of doom

//SetTimeOut Fn: a fn built into node & js
//takes a callback & number of millaseconds to wait to execute
//create artifical deylays

//setTimeout(callback, numMs);

setTimeout(function () {
  console.log('Still waiting');
}, 1000); //one second

setTimeout(function () {
  console.log('waiting');
}, 500); //halfsecond

/* Promises are alternatives to callbacks- can chain code together when you have mutliple
ASYNC calls */
//CODE HELL BELOW EXAMPLE:
loadData(function(err,data) {
  if(err) {
    //handle error
  }
  loadData(function(err, data) {
    if(err) {
      //handle error
    }
    loadData(function(err, data) {
      if(err) {
        //handle error
      }
      loadData(function(err, data) {
        if(err) {
          //handle error
        }
      });
    });
  });
});

//promises examples
/*sudo code
loadData()
  .then(function (data) {

  })
  .then(function (data) {

  })
  .then(function (data) {

  })
  .catch(function (erro) {
    //handle all the errors
  })*/

  new Promise((resolve, reject) => {
    try {
          //do some operation
      resolve('value to be passed back');
    } catch (e) {
      reject('error to be passed back');
    }
    });

//this would be module example to pull from:
module.exports = {
  getName: function () {
    return new Promise((resolve, reject) => {
      return resolve('Jim');
    })
  }
};
//with error
module.exports = {
  getName: function () {
    return new Promise((resolve, reject) => {
      return reject('some error');
    })
  }
};

//exporting & using the module:
let mod = require('./module');
mod.getName().then((name) => {
  console.log(name);
});

//with error
let mod = require('./module');
mod.getName().then((name) => {
  console.log(name);
})
.catch((err) => {
  console.log(err);
});


//then is used most often: how you get data out of the fn. method on all promises:
  //takes 1 arg
  //resolve- data to be passed back to then block
  //reject- returns errors

//can chain Asynchronous operations synchoronously

let mod = require('./module');
mod.getName().then((name) => {
  console.log(name);
  return mod.getName();
}).then(data=> {
  console.log(data);
})
.catch((err) => {
  console.log(err);
});

//promise.all: method built in and takes 1 arg (array of prommises)
//will wait for all to be resolved before going into the .then block
Promise.all([
  mod.getName(),
  mod.getName(),
  mod.getName(),
  mod.getName()
]).then((data) => {
  //will return an array of all resolves
}).catch((err) => {

});

//example of promise.all
let database= module
let userPromises= []; //just an array that will hold the promises- have to .then to do something with them

userPromises.push(database.getUser('Spruce'));
userPromises.push(database.getUser('John'));
userPromises.push(database.getUser('Leslie'));
userPromises.push(database.getUser('Alex'));

Promise.all(userPromises)
.then((data) => { //going to be an array of data
  console.log(data);
})
.catch((err) => {
  console.log(err); //if one is not found then returns all not found 
});

// Promises
function getUser(firstName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      for ( let i =0; i < users.length; i++) {
        if(users[i].firstName === firstName) {
          return resolve(users[i]);
        }
      }
      return reject('user not found');
    }, 200);
  });
}

//would export the modules: and on other js application file:
let database= modules

database.getUser('Spruce')
.then((user) => {
  console.log(user);
  return database.getUserEmail(user.firstName);
})
.then((userEmail) => {
  console.log(userEmail);
})
.catch((err) => {
  console.log(err);
});

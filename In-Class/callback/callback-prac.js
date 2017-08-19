const greet= function(callback) {
  console.log('Hello');
  callback();
};

greet(function() {
  console.log('How are you?');
});

//promise
let mod = require('./module');
mod.getName().then((name) => {
  console.log(name);
})
.catch((err) => {
  console.log(err);
});

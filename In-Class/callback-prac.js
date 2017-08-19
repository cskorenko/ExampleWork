const greet= function(callback) {
  console.log('Hello');
  callback();
};

greet(function() {
  console.log('How are you?');
});

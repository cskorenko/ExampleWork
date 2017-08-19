const emitter = require('./module');

emitter.on('wake-up', function() {
  console.log('Good');
});

emitter.on('wake-up', function() {
  console.log('Morning!');
});

emitter.on('go-to-sleep', function() {
  console.log('Good');
});

emitter.on('go-to-sleep', function() {
  console.log('Night!')
});

emitter.emit('wake-up');
emitter.emit('go-to-sleep');

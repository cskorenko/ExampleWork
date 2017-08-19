function slowFunction () {
  setTimeout(function() {
    console.log('slow');
  }, 1000);
}

function fastFunction () {
  setTimeout(function() {
    console.log('fast');
  }, 500);
}

slowFunction();
fastFunction();

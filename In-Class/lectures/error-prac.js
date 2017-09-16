// fn that accepts 1 arg that is a string - throw an excpetion to a try catch block if more than 1 word

function oneWordString (string) {
    if(string.includes(' ')) {
      throw new Error('String is longer than one word');
    } 
    return 1;
}

// try {
//   console.log(oneWordString('Hello World'));
// } catch(e) {
//   console.log('ERROR');
//   console.log(e);
// }

// same as above but with a callback

function stringCallback (string, callback) {
  if(string.includes(' ')) {
    callback(new Error('String is more than one word'));

  } else {
    callback(null, 1);
  }
}

stringCallback ('Hello', (err, result) => {
  if(err) {
    console.log('Error');
    console.log(err);
  } else {
    console.log('Result');
    console.log(result);
  }
});

stringCallback ('Hello World', (err, result) => {
  if(err) {
    console.log('Error');
    console.log(err);
  } else {
    console.log('Result');
    console.log(result);
  }
});

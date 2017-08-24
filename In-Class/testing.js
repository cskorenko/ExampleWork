//Will always have to test your code
/* principal called test driven development:
this means writing tests before actually writing code
  - then run the test to make sure the test fails correctly
  - then write code
- a way to document your code so others know you intent

types of tests:
  - unit test: way to test a specific chunk of code
    take a file that unzips a compressed file
      - you would write a unit test on this chunk of code only
*/

function aNumber () {
  return 76;
}

function multiFunc (fn) {
  return fn() * 10;
}

//unit test example:

function testMultiFunc() {

  function testNumber() {
    return 32;
  }

  let valueToTest = multiFunc(testNumber); //testing the func

    if(valueToTest === 320) { //if you change the multiFun fn it will fail
      console.log('test passed!');
    } else {
      console.log('test has failed');
    }

}

testMultiFunc();

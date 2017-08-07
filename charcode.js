//function on strings that let's you get an asking

let myString= 'hello';
//let myString= 'zebra';

for (let i = 0; i <myString.length; i++) {
  let charCode= myString.charCodeAt(i);
  console.log(myString[i]);
  console.log(charCode);
  console.log(String.fromCharCode(charCode));
  console.log(String.fromCharCode(charCode+1));

}
//+1 gives you the next letter
//website to say what character codes are and the list
//character code for everything
//CharCode's are case sensatives different code numbers


//.reverse

//Math.Ceiling
//Math.ceil() rounds provided intergter up to the nearest whole number

/* Cipher- a way to encrpyt text or values in a way it can be undone.
Caesar cipher shifts all the letters by 13 places

write a function that takes a ROT13 by 13 places.
Take the code and cipher it

rotate into the alpahet only for appropriate values only


*/

/*
function cipher(string) {

let str = string.toUpperCase();
const decodedString= [];


for (let i = 0; i <str.length; i++) {
  let charCode = str.charCodeAt(i);
  let newCharCode = 0;

  if (str[i] == ' ') {
     decodedString.push(' ');
  } else if (charCode > 77 && charCode < 99) {
      charCode = String.fromCharCode(charCode-13);
      decodedString.push(charCode);
  } else if (charCode <= 77) {
// want to subtract 13, but when the count hits 65 start from 90
      newCharCode = 90 - (13 - (charCode -64));
      charCode = String.fromCharCode(newCharCode);
      decodedString.push(charCode);
  }

  }

return decodedString.join('');

}


console.log(cipher('SERR CVMMN'));
console.log(cipher('LBH QVQ VG'));

*/

//write a function that accepts a string as an argument and
//returns the reverse of it

/*
function reverseString (string) {
let newString = [];
  for (let i = string.length; i >= 0; i-- ) {
    newString.push(string[i]);
  }
return newString.join('');
}

console.log(reverseString('Hello, World!'));
console.log(reverseString('This is a test'));
console.log(reverseString('Javascript is great!'));
console.log(reverseString('wRjuUJvJxbnyTB3?sCLAp2mbGL3xe8'));
console.log(reverseString('A'));
*/

//wrtie a function that calculates how much to tip based on the total
//price & service rating. Tips should be rounded up to te nearest dollar.
//Service ratings are as follows:(shouldn't be case sensitive)
// Terrible: 0%; Poo: 5%; Good: 10%; Great: 15%; Excellent: 20%

//If an unrecognized rating is receved return "Rating not recognized";


function calculateTip (bill, rating) {
  let newRating= rating.toLowerCase();
  let tip = 0;
    if (newRating === 'excellent') {
      tip = Math.ceil(bill * .20);
    } else if (newRating === 'great') {
      tip = Math.ceil(bill * .15);
    } else if (newRating === 'good') {
      tip = Math.ceil(bill * .10);
    } else if (newRating === 'poor') {
      tip = Math.ceil(bill * .05);
    } else if (newRating === 'terrible') {
      tip = 0;
    } else {
      tip = 'Rating not recognized';
    }

return tip;
}



console.log(calculateTip(20, "terrible"));
console.log(calculateTip(26.95, "good"));
console.log(calculateTip(26.95, "kind of okay but not great"));
console.log(calculateTip(20, "Excellent"));
console.log(calculateTip(26.95, "good"));

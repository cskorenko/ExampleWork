
function rot13(str) { // LBH QVQ VG!

  var newArr = [];

for(var i=0; i < str.length; i++) {
  var charCode = str.charCodeAt(i);

  if (charCode < 65 || charCode > 90) {
    newArr.push(str[i]);
  } else if (charCode < 78 && charCode > 64) {
    charCode= String.fromCharCode(charCode +13);
    newArr.push(charCode);
  } else if (charCode > 77 && charCode < 91) {
    charCode= String.fromCharCode((charCode+13) -26);
    newArr.push(charCode);
  }

}


newArr= newArr.join("");
return newArr;
}


console.log(rot13("SERR PBQR PNZC"));

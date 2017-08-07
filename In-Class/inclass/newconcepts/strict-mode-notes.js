//srict mode: writing app- person can be a user of their accont
/*'use strict';
- makes it impossible to accidentaly create global variables
- failing silently- what you expected to happen didn't happen, but nothing is telling you it''s wrong
- won't let you delete un-deletable properties
- requires all args to a function to be unquie


let person;

  //lots of code in background happening

 persom = {
   name: Joe
 };

 //lots more code

 let emailMessage= 'Welcome to Catbook the Soical Network for cats ' + person;
 console.log(emailMessage);

 person is undefined b/c we spelt person wrong under object

 can use strict mode on top of the file to get reference code of the console

 */

 //prototype can't be delted from an object

 // immedatly envoked function expressions
 //use with large project with multiple javascript files
 //everything from all files are in global scope
 //ifey?
 //vars made in the ifey won't clash with other vars named by coworkers
 //in global scope

 'use strict';

 (function () {


 })();

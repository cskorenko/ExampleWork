// fn to pass user object into & return true
// - if user properties are not empty strings or undefined
// - and no id was passed in
// export a fn that import in index.js & call on post request
module.exports = {
  validateInput: validateInput,
};

// function validateUser (user) {
//   let validUser = true;
//   const userValues = Object.values(user);
//   for(let i = 0; i < userValues.length; i++) {
//     if(userValues[i] === '' || userValues[i] !== 'string') {
//       validUser = false;
//     }
//
//     if(user.hasOwnProperty('id')) {
//       validUser = false;
//     }
//   }
//
//   return validUser;
// };




function validateInput(object) {
  propertyArray = ["username", "firstname", "lastname", "password"];
  if (object.id) {
    return false;
  } else {
    for (property in propertyArray) {
      if (object[propertyArray[property]] === "" || object.hasOwnProperty(propertyArray[property]) === false) {
        return false;
      };
    };
  };
  return true;
}

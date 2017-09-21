// fn to pass user object into & return true
// - if user properties are not empty strings or undefined
// - and no id was passed in
// export a fn that import in index.js & call on post request
module.exports = {
  validateUser: validateUser
};

function validateUser (user) {
  let validUser = true;
  const userValues = Object.values(user);
  for(let i = 0; i < userValues.length; i++) {
    if(userValues[i] === '') {
      validUser = false;
    }

    if(user.hasOwnProperty('id')) {
      validUser = false;
    }
  }

  return validUser;
};

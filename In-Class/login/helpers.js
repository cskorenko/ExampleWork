const request = require('request');

module.exports = {
  sendRequest,
  validateUser,
}

function sendRequest (url) {
  return new Promise((resolve, reject) => {
    request(url, (err, res, body) => {
      if (err || !res) {
        reject(`There was an issue sending request to ${url}`);
      }

      resolve({
        res: res,
        body: body || {}
      });
    });
  });
}

// function validateUser(users, username, password) {
//   let user;
//     for(let i = 0; i < users.length; i++) {
//       if(username === users[i].username && password === users[i].password) {
//         return true;
//       } else {
//         return false;
//       }
//     }
// }

function validateUser(userArray, currentUser) {
  passwordMatch = false;

  const filterUserArray = userArray.filter((userObj) => {
    return userObj.username === currentUser.username;
  });

  const userRecord = filterUserArray[0];

  if(filterUserArray.length > 0 && (currentUser.password === userRecord.password)) {
    passwordMatch = true;
  }

  return passwordMatch;
}

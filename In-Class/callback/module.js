module.exports = {
  getName: function () {
    return new Promise((resolve, reject) => {
      try {
        return resolve('Jim');
      } catch(e) {
        return reject('some error');
      }
    })
  }
};

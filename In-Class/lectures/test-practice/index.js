module.exports = {
  addFunc,
  asyncSortArray,
  fetchFromDatabase
}

function addFunc (a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('invalid parameters!');
    }
    return a + b;
};

function asyncSortArray (arr, cb) {
    if (!arr || !Array.isArray(arr)) {
        cb(new Error('not an array'), null);
        return;
    }
    let sortedArr = arr.slice().sort();
    cb(null, sortedArr);
};

function fetchFromDatabase (userId) {
    const users = {
        '1': {
            name: 'Spruce'
        },
        '2': {
            name: 'Brenna'
        }
    };

    return new Promise(function(resolve, reject) {
        if (!userId || typeof userId !== 'string') {
            return reject('invalid parameters!');
        }
        const user = users[userId];
        if (user) {
            return resolve(user);
        } else {
            return reject('user not found');
        }
    });
}

console.log(fetchFromDatabase(1));

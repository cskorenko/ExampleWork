module.exports = {
  addFunc,
}

function addFunc (a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('invalid parameters!');
    }
    return a + b;
};

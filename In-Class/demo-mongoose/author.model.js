const mongoose = require('mongoose');

const authorSchema = mongoose.Schema({
  firstname: String,
  lastname: String,
  books: [{ type: mongoose.Schema.Types.ObjectId, ref:'Book' }]
    // an array of objects- an id that is equal to some other reference in the book db
});

module.exports = mongoose.model('Author', authorSchema);

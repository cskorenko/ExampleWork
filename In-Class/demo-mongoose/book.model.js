const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
  title: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref:'Author' }
    // an objects- an id that is equal to reference in the author db
});

module.exports = mongoose.model('Book', bookSchema);

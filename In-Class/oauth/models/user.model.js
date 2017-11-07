const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  github: {
    id: String,
    username: String,
    publicRepo: Number
  }
});

module.exports = mongoose.module('Users, userSchema');

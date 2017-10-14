//mongoose
const express = require('express');
const mongodb = require('./mongodb.utils');
const Puppy = require('./puppy-model');

const app = express();


app.get('/', (request, response) => {
  mongodb.createEventListeners();
  mongodb.connect();

  Puppy.find({}).exec().then((results) => {
    response.status(200).json(results);
    mongodb.disconnect();
  }).catch((e) =>  {
    console.log(e);
    mongodb.disconnect();
  });
})

// mongodb.createEventListeners();
// mongodb.connect();
//
// //Query Database
// Puppy.find({ likes: 'snacks' }).exec().then((results) => {
//   console.log(results);
//   mongodb.disconnect();
// }).catch((e) =>  {
//   console.log(e);
//   mongodb.disconnect();
// });

app.listen(3001);



//Insert new data
// const fido = new Puppy({
//   name: 'Fido',
//   breed: 'German Shepard',
//   age: 1,
//   likes: ['running', 'bones', 'playing fetch'],
//   dislikes: ['baths']
// });
//
// fido.save().then((result) => {
//   console.log(result);
//   mongodb.disconnect();
// }).catch((err) => {
//   throw(err);
//   mongodb.disconnect();
// });




// db.on('error', () => {
//   console.log('Could not connect to database');
// });
//
// db.once('open', () => {
//   console.log('Connected to the database');
//
//   const puppySchema = mongoose.Schema({
//     name: String,
//     breed: String,
//     age: Number,
//     likes: [String],
//     dislikes: [String]
//   });
//
//   const Puppy = mongoose.model('Puppy', puppySchema);
//
//   const  sprinkles = new Puppy({
//     name: 'Sprinkles',
//     breed: 'Dalmatian',
//     age: 2,
//     likes: ['snacks', 'swimming', 'playing fetch'],
//     dislikes: ['all other animals']
//   });
//
//   sprinkles.save((err, result) => {
//     if (err) {
//       console.log(err);
//     }
//
//     console.log(result);
//   });
// });

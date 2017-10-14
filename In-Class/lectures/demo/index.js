//mongoose
const express = require('express');
const bodyParser = require('body-parser')
const mongodb = require('./mongodb.utils');
const Puppy = require('./puppy-model');
const errMiddleware = require('./err-middleware');
const helpers = require('./helpers');

const app = express();

app.use(bodyParser.json());
mongodb.createEventListeners();
mongodb.connect();


app.get('/', (req, res, next) => {
  Puppy.find({}).exec().then((results) => {
    res.status(200).json(results);
  }).catch((e) =>  {
    next(e)
  });
});

app.post('/', (req, res, next) => {
  let newPuppy = new Puppy({
    name: req.body.name,
    breed: req.body.breed,
    age: req.body.age,
    likes: req.body.likes,
    dislikes: req.body.dislikes
  })

  if(helpers.validatePuppy(newPuppy)) {
    newPuppy.save().then((result) => {
      res.status(200).json(newPuppy);
    }).catch((e) => {
      next(e);
    });
  } else {
    res.status(401).send('Invalid Puppy Entry');
  }
});

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

app.use(errMiddleware);

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

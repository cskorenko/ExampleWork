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

app.put('/', (req, res, next) => {
  Puppy.findByIdAndRemove('59e268f31dd93b48ed801c01')
       .then((result) => {
         res.status(200).json(result);
       }).catch((e) => {
         next(e);
       });
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


/* Puppy.findOne({ likes: 'snacks' }).exec()
only finds the first one

Puppy.findById('3089237983749euas893').then((result) => {
})

const query = Puppy.find({ breed:'Dalmatian' });
query.select('name age likes');   // only gives back these properties
query.limit(2); // num of results to return
query.sort({ age:-1 });
query.exec()
  .then((results) => {
    console.log(results);
  }) catch((e) => {
    console.log(e);
  });


Change information in database:
Puppy.findById({ '63673rgds87323' })
    .then((puppy) => {   // puppy is a mongoose object
      console.log(puppy);
      puppy.age = 7;
      return puppy.save();
    })
    .then((updatedPuppy) => {
      console.log(updatedPuppy);
    })
    .catch((e) => {
      console.log(e);
    });


Puppy.findByIdAndUpdate('dsdfsud88whsdjh', {age: 8, name: 'Fluffy Jr.'}, {new: true})  // id first & then info to change
  .then((result) => {
    console.log(result);
  }).catch((e) => {
    console.log(e);
  });

Puppy.findOneAndUpdate({ breed: 'Dalmatian' }, { breed: 'Beagle' }, { new: true })
     .then(())

Puppy.findByIdAndRemove('kjhsduhs83924hskj')
     .then(())


let promises = [];
Puppy.find({ likes: 'snacks'})
  .then((r) => {
    console.log(r);
    for(let i = 0; i <r.length; i++) {
      r[i].age =1;
      promises.push(r[i].save());
    }
    return Promise.all(promises);
})
.then((results) => {
  console.log(results);
})
.catch((e) => {
  console.log(e);
});

*/
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

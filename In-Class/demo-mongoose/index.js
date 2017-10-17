const express = require('express');
const bodyParser = require('body-parser')

const mongodb = require('./mongodb.utilis');
const Author = require('./author.model');
const Book = require('./book.model');
const helpers = require('./helpers');

mongodb.createEventListeners();
mongodb.connect();

// entered: author
// const shirleyJackson = new Author({
//   firstname: 'Shirley',
//   lastname: 'Jackson'
// });
//
// shirleyJackson.save()
//   .then((result) => {
//     console.log(result);
//     mongodb.disconnect();
//   }).catch((e) => {
//     console.log(e);
//     mongodb.disconnect();
//   });

// enter book for above author
// Author.find({ firstname: 'Shirley', lastname: 'Jackson' }).exec()
//   .then((authorResult) => {
//     const shirleyJackson = authorResult[0];
//     const weHaveAlways = new Book ({
//       title: 'We Have Always Lived in the Castle',
//       author: shirleyJackson._id
//     });
//     return weHaveAlways.save();
//   }).then((bookResult) => {
//     console.log(bookResult);
//     mongodb.disconnect();
//   })
//   .catch((e) => {
//     console.log(e);
//     mongodb.disconnect();
//   });

// connecting book to author
// let foundBook;
// Book.find({ title: 'We Have Always Lived in the Castle'}).exec()
//   .then((bookResult) => {
//     foundBook = bookResult[0];
//     return Author.find({ firstname: 'Shirley', lastname: 'Jackson'}).exec()
//   })
//   .then((authorResult) => {
//     let author = authorResult[0];
//     author.books.push(foundBook._id);
//     return author.save();
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//     mongodb.disconnect();
//   });

// Book.find({ title: 'We Have Always Lived in the Castle'}).populate('author').exec()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });
const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).send('Welcome to the library!')
});

app.get('/firstname', (req, res) => {
  const firstname = req.query.firstname;

  Author.find({ firstname: firstname }).exec()
    .then((authorResult) => {
      res.status(200).json(authorResult);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
});

app.get('/lastname', (req, res) => {
  const lastname = req.query.lastname;

  Author.find({ lastname: lastname }).exec()
    .then((authorResult) => {
      res.status(200).json(authorResult);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
});

app.get('/title', (req, res) => {
  const title = req.query.title;

  Book.find({ title: title }).exec()
    .then((bookResult) => {
      res.status(200).json(bookResult);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
});

app.post('/author', (req, res) => {
  let author = new Author ({
    firstname: req.body.firstname,
    lastname: req.body.lastname
  });

  if(helpers.varifyAuthor(author) === false) {
    throw new Error('invalid author submission');
  }

  author.save()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
});

app.post('/book', (req, res) => {
  let book = new Book ({
    title: req.body.title
  });

  if(helpers.varifyBook(book) === false) {
    throw new Error('invalid book submission');
  }

  book.save()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
});

app.put('/author', (req, res) => {
  let lastname = req.query.lastname;
  let title = req.query.title;

  let foundBook;
  Book.find({ title: title }).exec()
    .then((bookResult) => {
      foundBook = bookResult[0];
      return Author.find({ lastname: lastname }).exec()
    })
    .then((authorResult) => {
      let author = authorResult[0];
      author.books.push(foundBook._id);
      return author.save();
    })
    .then((author) => {
      res.status(200).json(author);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
});


app.put('/book', (req, res) => {
  let lastname = req.query.lastname;
  let title = req.query.title;

  let foundAuthor;
  Author.find({ lastname: lastname }).exec()
    .then((authorResult) => {
      foundAuthor = authorResult[0];
      return Book.find({ title: title }).exec()
    })
    .then((bookResult) => {
      let book = bookResult[0];
      book.author= foundAuthor._id;
      return book.save();
    })
    .then((book) => {
      res.status(200).json(book);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});

module.exports= app;

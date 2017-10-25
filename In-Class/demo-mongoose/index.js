const express = require('express');
const bodyParser = require('body-parser')

const mongodb = require('./mongodb.utilis');
const Author = require('./author.model');
const Book = require('./book.model');
const libraryService = require('./library.service');

const PORT = process.env.PORT || 8080;

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
  res.status(200).send('Health Check!');
});

// app.get('/', (req, res) => {
//   res.status(200).send('Welcome to the library!')
// });

app.get('/authors', (req, res) => {
  libraryService.fetchAllAuthors()
  .then((authorsFetched) => {
      res.status(200).json(authorsFetched);
  })
  .catch((e) => {
    res.status(500).send(e);
  });
});

app.get('/books', (req, res) => {
  libraryService.fetchAllBooks()
  .then((booksFetched) => {
    res.status(200).json(booksFetched);
  })
  .catch((e) => {
    res.status(500).send(e);
  });
});

app.get('/firstname', (req, res) => {
  const firstname = req.query.firstname;

  libraryService.fetchAuthorByFirstname(firstname)
    .then((authorResult) => {
      res.status(200).json(authorResult);
    })
    .catch((e) => {
      res.status(500).send(e);
    });
});

app.get('/lastname', (req, res) => {
  const lastname = req.query.lastname;

  libraryService.fetchAuthorByLastname(lastname)
    .then((authorResult) => {
      res.status(200).json(authorResult);
    })
    .catch((e) => {
      res.status(500).send(e);
    });
});

app.get('/title', (req, res) => {
  const title = req.query.title;

  libraryService.fetchBookByTitle(title)
    .then((bookResult) => {
      res.status(200).json(bookResult);
    })
    .catch((e) => {
      res.status(500).send(e);
    });
});

app.post('/author', (req, res) => {
  let author = req.body.author

  libraryService.createNewAuthor(author)
    .then((authorSaved) => {
      res.status(200).json(authorSaved);
    })
    .catch((e) => {
      res.status(500).json(e);
    });
});

app.post('/book', (req, res) => {
  let book = req.body.book;

  libraryService.createNewBook(book)
    .then((bookSaved) => {
      res.status(200).json(bookSaved);
    })
    .catch((e) => {
      res.status(500).send(e);
    });
});

app.post('/delete-author', (req, res) => {
  let id = req.query.id;
  Author.findByIdAndRemove(id)
  .then((result) => {
    res.status(200).json(result);
  })
  .catch((e) =>{
    res.status(500).send(e);
  });
});

app.post('/delete-book', (req, res) => {
  let id = req.query.id;
  Book.findByIdAndRemove(id)
  .then((result) => {
    res.status(200).json(result);
  })
  .catch((e) =>{
    res.status(500).send(e);
  });
});

app.put('/author', (req, res) => {
  let lastname = req.query.lastname;

  Author.find({ lastname: lastname }).exec()
    .then((authorResult) => {
      let author = authorResult[0];
      author.firstname = req.body.firstname;
      author.lastname= req.body.lastname;
      return author.save();
    })
    .then((updateAuthor) => {
      res.status(200).json(updateAuthor);
    })
    .catch((e) => {
      res.status(500).send(e);
    });
});


app.put('/book', (req, res) => {
  let bookData = req.body.book;

  libraryService.updateBook(bookData)
    .then((bookUpdate) => {
      res.status(200).json(bookUpdate);
    })
    .catch((e) => {
      res.status(500).send(e);
    });
  //
  // Book.find({ title: title }).populate('author').exec()
  //   .then((bookResult) => {
  //     let book = bookResult[0];
  //     book.title = req.body.title;
  //     return book.save();
  //   })
  //   .then((updateBook) => {
  //     res.status(200).json(updateBook);
  //   })
  //   .catch((e) => {
  //     res.status(500).send(e);
  //   });
});

// app.listen(PORT, () => {
//   console.log(`Listening on port ${PORT}`);
// });

app.listen(3000, () => {
  console.log('Listening on port 3000');
});

module.exports= app;

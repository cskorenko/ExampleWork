module.exports = {
  varifyAuthor,
  varifyBook
}

function varifyAuthor (author) {
  if(!author.firstname && !author.lastname) {
    return false;
  }

  return true;
}

function varifyBook (book) {
  if(!book.title) {
    return false;
  }

  return true;
}

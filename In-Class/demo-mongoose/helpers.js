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

function varifyBook (title) {
  if(title !== String) {
    return false;
  }

  return true;
}

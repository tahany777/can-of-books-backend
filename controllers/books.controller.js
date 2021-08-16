const seedBook = require('../modulers/books.model');


const booksController = (req, res) => {
  seedBook();
  res.send('hello');
}

module.exports=booksController;
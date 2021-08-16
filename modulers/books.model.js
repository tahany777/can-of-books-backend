const mongoose = require('mongoose');

const books = new mongoose.Schema({
  title: String,
  description: String,
  status: String,
  email: String
});

const Book = mongoose.model('Books', books);

const seedBook = () => {
  const book1 = new Book({
    title: 'Five a.m. Club ',
    description: 'The 5 AM Club discusses how to be the master of your own life by waking up early to have a productive day.',
    status: 'available',
    email: 'Tahany@hotmail.com',
  })
  book1.save();
  const book2 = new Book({
    title: 'Eat That Frog ',
    description: 'This book helps you save more time by encouraging you to tackle the most important tasks first. It addresses issues many of us face: poor productivity, self-discipline and working practices.',
    status: 'Not available',
    email: 'Tahany123@hotmail.com',
  })
  book2.save();
  const book3 = new Book({
    title: '168 Hours ',
    description: 'interviewed a wide range of successful people to discover that they all put the important stuff first.',
    status: 'available',
    email: 'Tahany_ali@hotmail.com',
  })
  book3.save();
}

module.exports=seedBook;
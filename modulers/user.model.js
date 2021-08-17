'use strict';
const mongoose = require('mongoose');
const bookSchema = require('./books.model');
const UserSchema = new mongoose.Schema({
  email: String,
  books:[bookSchema]
});

const user = mongoose.model('user', UserSchema);

module.exports = user;

const seedBooks = () => {
  const book1 = {
    title: 'Five a.m. Club ',
    description: 'The 5 AM Club discusses how to be the master of your own life by waking up early to have a productive day.',
    status: 'available',
  }
  const book2 = {
    title: 'Eat That Frog ',
    description: 'This book helps you save more time by encouraging you to tackle the most important tasks first. It addresses issues many of us face: poor productivity, self-discipline and working practices.',
    status: 'Not available',
  }
  const book3 = {
    title: '168 Hours ',
    description: 'interviewed a wide range of successful people to discover that they all put the important stuff first.',
    status: 'available',
  }
  const tahanyBestBooks = new user({
    email: 'tahany.ali9995@gmail.com',
    books: [book1,book2,book3]
  })
  tahanyBestBooks.save();
  return tahanyBestBooks;
}
module.exports=seedBooks;

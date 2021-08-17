'use strict';
const user = require('../modulers/user.model');

const booksController = (req, res) => {
  const email1 = req.query.email;
  user.findOne({email: email1}, (err, data) => {
    if(err) {
      res.send('no books')
    }
      res.send(data);
  })
}

module.exports=booksController;
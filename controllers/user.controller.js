'use strict';
const seedBooks = require('../modulers/user.model');

const userController = (req, res) => {
  res.send(seedBooks());
}
module.exports=userController;

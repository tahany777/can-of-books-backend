'use strict';
const user = require('../modulers/user.model');

addBookController = (req,res) => {
  let {addTitle, addDescr, addStatus,email} = req.body;
  if(error) {res.send('not found', error)}
  else {
    let data = [];
    const email1 = email;
    user.findOne({email: email1}, (err, data) => {
      data.push(addTitle, addDescr, addStatus);
      res.send(data);
    })
  }
}
"use strict";
const userM = require("../modulers/user.model");

const addBookController = (req, res) => {
  let email = req.body["email"];
  console.log(req.body);
  let data = {
    title: req.body["title"],
    status :req.body["status"],
    description : req.body["discription"],
  }
  let bookUser = new userM(email,data);
  bookUser.save().then(res.json({message:"user created succefully",user:bookUser}));
};
module.exports = addBookController;

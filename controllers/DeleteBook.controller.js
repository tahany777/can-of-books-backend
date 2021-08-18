'use strict';
const user = require('../modulers/user.model');

const deleteBookController = (req,res) => {
  let email = req.params["id"];
  user.findByIdAndDelete({_id:email},(err,data)=>{
      if (err){
          res.send("error occured");
      }
      console.log(email);
      res.send("user deleted");
  })
}
module.exports=deleteBookController;
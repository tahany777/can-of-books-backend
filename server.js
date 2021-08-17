'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa');
const mongoose = require('mongoose');
const app = express();
const addBookController = require('./controllers/addBook.Controller');
const userController =require('./controllers/user.controller');
app.use(cors());
const PORT = process.env.PORT;
mongoose.connect('mongodb://localhost:27017/bestBooks', {useNewUrlParser:true, useUnifiedTopology: true })
const client = jwksClient({
  jwksUrl: `https://${process.env.AUTH_DOMAIN}/.well-known/jwks.json`
});

app.get('/books', userController);

app.post('/book', addBookController);

const getKey = (header, callback) => {
  client.getSign(header.kid, function(err, key) {
    const signin = key.publicKey || key.rsaPublicKey;
    callback(null, signin);
  });  
}
app.get('/test', (request, response) => {
  // TODO: 
  // STEP 1: get the jwt from the headers
  const token = request.headers.authorization.split(' ')[0];
  jwt.verify(token, getKey, {}, (err, user) => {
    if(err) {
      response.send('error');
    }
    response.send(user);
  });
  response.send(token);
  // STEP 2. use the jsonwebtoken library to verify that it is a valid jwt
  // jsonwebtoken dock - https://www.npmjs.com/package/jsonwebtoken
  // STEP 3: to prove that everything is working correctly, send the opened jwt back to the front-end
})

app.listen(PORT, () => console.log(`listening on ${PORT}`));

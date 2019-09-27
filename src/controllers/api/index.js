const express = require('express');
const UsersController = require('./users');

const ApiRouter = express.Router();

ApiRouter.get('/', (req, res) => {
  res.send('You sould query USERS');
});

ApiRouter.use('/users', UsersController);

module.exports = ApiRouter;

const express = require('express');
const MainController = require('./routes/main');

const ServerRouter = express.Router();

ServerRouter.use('/', MainController);

module.exports = ServerRouter;

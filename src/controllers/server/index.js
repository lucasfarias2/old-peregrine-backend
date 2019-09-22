const express = require('express');
const DashboardController = require('./dashboard');

const ServerRouter = express.Router();

ServerRouter.use('/', DashboardController);

module.exports = ServerRouter;

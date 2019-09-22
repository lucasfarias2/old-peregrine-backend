const express = require('express');
const OrderController = require('./orders');
const UsersController = require('./users');
const ReviewsController = require('./reviews');
const ServicesController = require('./services');
const CategoriesController = require('./categories');

const ApiRouter = express.Router();

ApiRouter.get('/', (req, res) => {
  res.send(
    'You sould query ORDERS, USERS, REVIEWS, LOCATIONS, SERVICES or CATEGORIES'
  );
});
ApiRouter.use('/orders', OrderController);
ApiRouter.use('/users', UsersController);
ApiRouter.use('/reviews', ReviewsController);
ApiRouter.use('/services', ServicesController);
ApiRouter.use('/categories', CategoriesController);

module.exports = ApiRouter;

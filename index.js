const express = require('express');
const bodyParser = require('body-parser');
const db = require('./src/db/db');

const OrderController = require('./src/controllers/orders');
const UsersController = require('./src/controllers/users');
const ReviewsController = require('./src/controllers/reviews');
const LocationsController = require('./src/controllers/locations');
const ServicesController = require('./src/controllers/services');
const CategoriesController = require('./src/controllers/categories');

const server = express();
const port = 3000;

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

server.get('/', (req, res) => {
  res.send('You sould query ORDERS, USERS, REVIEWS, LOCATIONS, SERVICES or CATEGORIES');
});

server.use('/orders', OrderController);
server.use('/users', UsersController);
server.use('/reviews', ReviewsController);
server.use('/locations', LocationsController);
server.use('/services', ServicesController);
server.use('/categories', CategoriesController);

db.sync({ force: true }).then(() => {
  server.listen(port, () => {
    console.log(`Server listening on ${port}`);
  });
});

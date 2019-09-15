const express = require('express');
const router = express.Router();
const Order = require('../db/models/order');

router.get('/', (req, res) => {
  Order.findAll().then(orders => {
    res.json(orders);
  });
});

router.post('/', (req, res) => {
  Order.create({
    author: req.body.author,
    status: `AWAITING`
  });
  res.send('Order successfully created').status(200);
});

module.exports = router;

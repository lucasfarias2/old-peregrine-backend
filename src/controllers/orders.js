const express = require('express');
const Order = require('../db/models/order');

const router = express.Router();

router.get('/', (req, res) => {
  Order.findAll().then(orders => {
    res.json(orders);
  });
});

router.post('/', (req, res) => {
  res.createTable(Order, {
    id: req.body.id,
    author: req.body.author,
    status: 'AWAITING',
  });
});

module.exports = router;

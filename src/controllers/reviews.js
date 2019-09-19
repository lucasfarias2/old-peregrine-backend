const express = require('express');
const Review = require('../db/models/review');

const router = express.Router();

router.get('/', (req, res) => {
  res.findAll(Review);
});

router.post('/', (req, res) => {
  const { service_id, author_id, worker_id, order_id, rating } = req.body;
  res.createTable(Review, {
    service_id,
    author_id,
    worker_id,
    order_id,
    rating,
  });
});

module.exports = router;

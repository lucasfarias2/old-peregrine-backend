const express = require('express');
const Order = require('../../db/models/order');

const router = express.Router();

router.get('/', (req, res) => {
  res.findAll(Order);
});

router.post('/', (req, res) => {
  const { user_id, worker_id, service_id } = req.body;
  res.createTable(Order, {
    user_id,
    status: 'AWAITING', // TODO: add business logic layer,
    worker_id,
    service_id,
  });
});

module.exports = router;

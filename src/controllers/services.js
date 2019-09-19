const express = require('express');
const Service = require('../db/models/service');

const router = express.Router();

router.get('/', (req, res) => {
  res.findAll(Service);
});

router.post('/', (req, res) => {
  const { name, category_id, picture_url } = req.body;
  res.createTable(Service, { name, category_id, picture_url });
});

module.exports = router;

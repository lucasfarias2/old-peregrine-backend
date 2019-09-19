const express = require('express');
const Location = require('../db/models/location');

const router = express.Router();

router.get('/', (req, res) => {
  res.findAll(Location);
});

router.post('/', (req, res) => {
  const { user_id, address, extra_info, zip_code, city, country } = req.body;
  res.createTable(Location, {
    user_id,
    address,
    extra_info,
    zip_code,
    city,
    country,
  });
});

module.exports = router;

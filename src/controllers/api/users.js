const express = require('express');
const User = require('../../db/models/user');

const router = express.Router();

router.get('/', (req, res) => {
  res.findAll(User);
});

router.post('/', (req, res) => {
  const { email, name, profile_picture, services_ids } = req.body;
  res.createTable(User, { email, name, profile_picture, services_ids });
});

module.exports = router;

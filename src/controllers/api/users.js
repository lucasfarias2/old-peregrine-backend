const express = require('express');
const User = require('../../db/models/user');

const router = express.Router();

router.get('/', (req, res) => {
  res.findAll(User);
});

router.get('/:id', (req, res) => {
  res.findById(User, req.params.id);
});

router.post('/', (req, res) => {
  const {
    email,
    name,
    profile_picture,
    services_ids,
    locations,
    type,
  } = req.body;
  res.createTable(User, {
    email,
    name,
    profile_picture,
    services_ids,
    locations,
    type,
  });
});

module.exports = router;

const express = require('express');
const Category = require('../db/models/category');

const router = express.Router();

router.get('/', (req, res) => {
  res.findAll(Category);
});

router.post('/', (req, res) => {
  const { name, children_categories } = req.body;
  res.createTable(Category, { name, children_categories });
});

module.exports = router;

const express = require('express');
const Category = require('../db/models/category');

const router = express.Router();

router.get('/', (req, res) => {
  Category.findAll().then(categories => {
    res.json(categories);
  });
});

router.post('/', (req, res) => {
  const { id, name, children_categories } = req.body;
  res.createTable(Category, { id, name, children_categories });
});

module.exports = router;

const { ARRAY, STRING } = require('sequelize');
const db = require('../db');

const Category = db.define('category', {
  name: {
    type: STRING,
    allowNull: false,
  },
  children_categories: {
    type: ARRAY(STRING),
  },
});

module.exports = Category;

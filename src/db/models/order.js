const db = require('../db');
const { STRING } = require('sequelize');

const Order = db.define('order', {
  author: {
    type: STRING,
    allowNull: false
  },
  status: {
    type: STRING,
    allowNull: false
  }
});

module.exports = Order;

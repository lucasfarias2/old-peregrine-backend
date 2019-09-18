const { STRING } = require('sequelize');
const db = require('../db');

const Order = db.define('order', {
  id: {
    type: STRING,
    primaryKey: true,
    allowNull: false,
  },
  author: {
    type: STRING,
    allowNull: false,
  },
  status: {
    type: STRING,
    allowNull: false,
  },
});

module.exports = Order;

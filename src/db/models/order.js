const { STRING } = require('sequelize');
const db = require('../db');

const Order = db.define('order', {
  user_id: {
    type: STRING,
    allowNull: false,
  },
  status: {
    type: STRING,
    allowNull: false,
  },
  worker_id: {
    type: STRING,
    allowNull: false,
  },
  service_id: {
    type: STRING,
    allowNull: false,
  },
});

module.exports = Order;

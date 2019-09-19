const { INTEGER, STRING } = require('sequelize');
const db = require('../db');

const Review = db.define('review', {
  service_id: {
    type: STRING,
    allowNull: false,
  },
  author_id: {
    type: STRING,
    allowNull: false,
  },
  worker_id: {
    type: STRING,
    allowNull: false,
  },
  order_id: {
    type: STRING,
    allowNull: false,
  },
  rating: {
    type: INTEGER,
    allowNull: false,
  },
});

module.exports = Review;

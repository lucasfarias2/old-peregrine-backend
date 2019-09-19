const { STRING } = require('sequelize');
const db = require('../db');

const Service = db.define('service', {
  name: {
    type: STRING,
    allowNull: false,
  },
  category_id: {
    type: STRING,
    allowNull: false,
  },
  picture_url: {
    type: STRING,
    allowNull: true,
  },
});

module.exports = Service;

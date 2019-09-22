const { BOOLEAN, STRING } = require('sequelize');
const db = require('../db');

const Location = db.define('location', {
  user_id: {
    type: STRING,
    allowNull: false,
  },
  address: {
    type: STRING,
    allowNull: false,
  },
  extra_info: {
    type: STRING,
  },
  zip_code: {
    type: STRING,
    allowNull: false,
  },
  city: {
    type: STRING,
    allowNull: false,
  },
  country: {
    type: STRING,
    allowNull: false,
  },
  is_default: {
    type: BOOLEAN,
    allowNull: false,
  },
});

module.exports = Location;

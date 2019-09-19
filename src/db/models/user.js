const { ARRAY, STRING } = require('sequelize');
const db = require('../db');

const User = db.define('user', {
  email: {
    type: STRING,
    allowNull: false,
  },
  name: {
    type: STRING,
    allowNull: false,
  },
  profile_picture: {
    type: STRING,
    allowNull: true,
  },
  services_ids: {
    type: ARRAY(STRING),
    allowNull: true,
  },
  default_location_id: {
    type: STRING,
    allowNull: true,
  },
  type: {
    type: STRING,
    allowNull: false,
  },
});

module.exports = User;

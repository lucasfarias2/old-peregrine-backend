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
});

module.exports = User;

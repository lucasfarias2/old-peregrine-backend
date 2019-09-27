/* eslint-disable max-classes-per-file */
const { ARRAY, STRING, Model } = require('sequelize');
const db = require('../db');

class User extends Model {}
User.init(
  {
    uid: {
      type: STRING,
      allowNull: true,
      primaryKey: true,
    },
    email: {
      type: STRING,
      allowNull: true,
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
    type: {
      type: STRING,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: 'user' }
);

module.exports = User;

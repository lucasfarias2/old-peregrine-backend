const { BOOLEAN, STRING, Model } = require('sequelize');
const db = require('../db');

class Location extends Model {}
Location.init(
  {
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
  },
  { sequelize: db, modelName: 'location' }
);

module.exports = Location;

const Sequelize = require('sequelize');

const modelUsageMiddleware = (req, res, next) => {
  res.createTable = (Model, body) => {
    Model.create(body)
      .then(created => {
        res.status(200).json(created);
      })
      .catch(Sequelize.ValidationError, e => {
        res.status(400).send(`${e.name}: ${e.original}`);
        // eslint-disable-next-line no-console
        console.error(e);
      });
  };

  next();
};

module.exports = modelUsageMiddleware;

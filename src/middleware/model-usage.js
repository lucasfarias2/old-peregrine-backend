const Sequelize = require('sequelize');

const modelUsageMiddleware = (req, res, next) => {
  res.createTable = (Model, body, include) => {
    Model.create(body, include)
      .then(created => {
        res.status(200).json(created);
      })
      .catch(Sequelize.ValidationError, e => {
        res.status(400).send(e);
        // eslint-disable-next-line no-console
        console.error(e);
      });
  };

  res.findAll = Model => {
    Model.findAll().then(tables => {
      res.json(tables);
    });
  };

  res.findById = (Model, id) => {
    Model.findByPk(id)
      .then(found => {
        res.status(200).json(found);
      })
      .catch(e => {
        res.status(400).send(`${e.name}: ${e.original}`);
        // eslint-disable-next-line no-console
        console.error(e);
      });
  };

  res.findOne = (Model, key, value) => {
    Model.findOne({ where: { [key]: value } })
      .then(found => {
        res.status(200).json(found);
      })
      .catch(e => {
        res.status(400).send(`${e.name}: ${e.original}`);
        // eslint-disable-next-line no-console
        console.error(e);
      });
  };

  next();
};

module.exports = modelUsageMiddleware;

const Sequelize = require('sequelize');
const admin = require('firebase-admin');

const modelUsageMiddleware = (req, res, next) => {
  res.createTable = (Model, body, include) => {
    console.log(req.headers);
    admin
      .auth()
      .verifyIdToken(req.headers['x-user-token'])
      .then(decodedToken => {
        const { uid } = decodedToken;
        admin
          .auth()
          .getUser(uid)
          .then(userRecord => {
            // See the UserRecord reference doc for the contents of userRecord.
            console.log('Successfully fetched user data:', userRecord.toJSON());
            // eslint-disable-next-line no-param-reassign
            body.uid = uid;
            Model.create(body, include)
              .then(created => {
                res.status(200).json(created);
              })
              .catch(Sequelize.ValidationError, e => {
                res.status(400).send(e);
                // eslint-disable-next-line no-console
                console.error(e);
              });
          })
          .catch(error => {
            console.log('Error fetching user data:', error);
          });
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.error(error.message);
      });
  };

  res.findAll = Model => {
    if (req.headers['x-user-token']) {
      Model.findAll().then(tables => {
        res.json(tables);
      });
    } else {
      res.send('You dont have permission to fetch all users data');
    }
  };

  res.findById = (Model, id) => {
    Model.findByPk(id)
      .then(found => {
        res.status(200).json(found);
      })
      .catch(e => {
        res.status(400).send(e);
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
        res.status(400).send(e);
        // eslint-disable-next-line no-console
        console.error(e);
      });
  };

  next();
};

module.exports = modelUsageMiddleware;

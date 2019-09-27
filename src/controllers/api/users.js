const express = require('express');
const User = require('../../db/models/user');

const router = express.Router();

router.get('/', (req, res) => {
  res.findAll(User);
});

router.get('/:id', (req, res) => {
  res.findById(User, req.params.id);
});

router.post('/', (req, res) => {
  // admin
  //   .auth()
  //   .verifyIdToken(req.headers['x-user-token'])
  //   .then(decodedToken => {
  //     const { uid } = decodedToken;
  //     admin
  //       .auth()
  //       .getUser(uid)
  //       .then(userRecord => {
  //         // See the UserRecord reference doc for the contents of userRecord.
  //         console.log('Successfully fetched user data:', userRecord.toJSON());
  //         // eslint-disable-next-line no-param-reassign
  //         body.uid = uid;
  //         Model.create(body, include)
  //           .then(created => {
  //             res.status(200).json(created);
  //           })
  //           .catch(Sequelize.ValidationError, e => {
  //             res.status(400).send(e);
  //             // eslint-disable-next-line no-console
  //             console.error(e);
  //           });
  //       })
  //       .catch(error => {
  //         console.log('Error fetching user data:', error);
  //       });
  //   })
  //   .catch(error => {
  //     // eslint-disable-next-line no-console
  //     console.error(error.message);
  //   });

  const { email, name, profile_picture, services_ids, type } = req.body;
  res.createTable(User, {
    email,
    name,
    profile_picture,
    services_ids,
    type,
  });
});

module.exports = router;

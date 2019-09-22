const express = require('express');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');
const db = require('./src/db/db');
const modelUsageMiddleware = require('./src/middleware/model-usage');
const ApiRouter = require('./src/controllers/api');
const ServerRouter = require('./src/controllers/server');

const serviceAccount = require('./peregrine-hire-firebase-adminsdk-m3rs8-689ccc6791.json');

const server = express();
const port = process.env.PORT || 3000;

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

server.use(modelUsageMiddleware);

server.use('/', ServerRouter);
server.use('/api', ApiRouter);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://peregrine-hire.firebaseio.com',
});

admin
  .auth()
  .verifyIdToken(
    'eyJhbGciOiJSUzI1NiIsImtpZCI6IjBhOTAwNTFmYzA5ZThmNjBlMTE2N2ViYzMxMjYwZjNiM2Y2YmJhYmIiLCJ0eXAiOiJKV1QifQ'
  )
  .then(decodedToken => {
    const { uid } = decodedToken;
    console.log('decoded uid', uid);
  })
  .catch(error => {
    // eslint-disable-next-line no-console
    console.error(error.message);
  });

db.sync({ force: true }).then(() => {
  server.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Server listening on ${port}`);
  });
});

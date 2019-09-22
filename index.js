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
    'eyJhbGciOiJSUzI1NiIsImtpZCI6IjBhOTAwNTFmYzA5ZThmNjBlMTE2N2ViYzMxMjYwZjNiM2Y2YmJhYmIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGVyZWdyaW5lLWhpcmUiLCJhdWQiOiJwZXJlZ3JpbmUtaGlyZSIsImF1dGhfdGltZSI6MTU2OTExMjQ3MiwidXNlcl9pZCI6IjNTTGZwd3UyNnNiSUdSbXNrdDFpSFBLUGZnSDIiLCJzdWIiOiIzU0xmcHd1MjZzYklHUm1za3QxaUhQS1BmZ0gyIiwiaWF0IjoxNTY5MTEyNDc0LCJleHAiOjE1NjkxMTYwNzQsInBob25lX251bWJlciI6Iis1NDkxMTY4MDgzMDA2IiwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJwaG9uZSI6WyIrNTQ5MTE2ODA4MzAwNiJdfSwic2lnbl9pbl9wcm92aWRlciI6InBob25lIn19.Q9KskVKpN8FkzApQnK0rHO2Uab_WXLyOZB6W1PHU3qkQm3lFnpvJPInowPNZHehccvyM1ids9dnumS4MxU5Z8CLzq0YTEf3ghNT8NdVCgXcJ0st3NxrEdU-ZRxX2vBX3f7xV4kA130Jaq_59kbTK_uNhIeZI2OeRx6yaijztbuZTibmnZe8UVadjh2ZJbv7x3lqM8SlZ4rGthBST6tkCkljDwz2Q80xC3DC0JZbI1uDunnk5bMCfpeZGL3afc25JS2YUmhXFQ2gYuvkejarUgWSRGF9AwoDJh6FTfT2DiTKUglHSkHCMvLnJ8ojJcfNvYiSZgjGwNcWJNmOUFu62IA'
  )
  .then(decodedToken => {
    const { uid } = decodedToken;
    console.log('decoded uid', uid);
    admin
      .auth()
      .getUser(uid)
      .then(userRecord => {
        // See the UserRecord reference doc for the contents of userRecord.
        console.log('Successfully fetched user data:', userRecord.toJSON());
      })
      .catch(error => {
        console.log('Error fetching user data:', error);
      });
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

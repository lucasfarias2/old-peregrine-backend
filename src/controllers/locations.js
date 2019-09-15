const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Locations Controller');
});

module.exports = router;

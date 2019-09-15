const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Categories Controller');
});

module.exports = router;

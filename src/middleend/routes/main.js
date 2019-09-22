const express = require('express');
const MainMarshaller = require('../marshallers/main');

const router = express.Router();

router.get('/', (req, res) => {
  const MainMarshallerDto = new MainMarshaller();
  res.json(MainMarshallerDto);
});

module.exports = router;

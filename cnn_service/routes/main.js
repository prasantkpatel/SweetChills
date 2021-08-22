const express = require('express');
const emotion = require('./emotion');
const router = express.Router();

router.use('/api/vi/emotion', emotion);

module.exports = router;

const express = require('express');
const song = require('./song');
const router = express.Router();

router.use('/api/v1/song', song);

module.exports = router;

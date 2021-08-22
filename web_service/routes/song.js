const song_controller = require('../controllers/song');
const express = require('express');
const router = express.Router();

router.get('/', song_controller.get);
router.post('/', song_controller.post);

module.exports = router;

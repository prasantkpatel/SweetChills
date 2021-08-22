const express = require('express');
const router = express.Router();
const emotion_controller = require('../controllers/emotion');

router.get('/', emotion_controller.get); 
router.post('/', emotion_controller.post);

module.exports = router;

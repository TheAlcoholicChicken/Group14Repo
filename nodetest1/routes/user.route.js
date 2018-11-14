const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/user.controller');

router.get('/get_badge_message', user_controller.get_badge_message);
module.exports = router;

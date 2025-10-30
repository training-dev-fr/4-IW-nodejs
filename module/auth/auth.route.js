const express = require('express');
const authController = require('./auth.controller.js');
const router = express.Router();

router.post('/login',authController.login);
router.post('/signin',authController.signin);

module.exports = router;
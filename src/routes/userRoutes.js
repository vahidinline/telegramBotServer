const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/users', userController.getAllUsers);
router.get('/users/:telegramId', userController.getUserById);
router.get('/users/:telegramId/activities', userController.getUserActivities);

module.exports = router;
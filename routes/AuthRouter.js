const express = require('express');
const router = express.Router();

// importa o AuthController
const AuthController = require('../controllers/AuthController')

router.post('/login', AuthController.index);

module.exports = router;
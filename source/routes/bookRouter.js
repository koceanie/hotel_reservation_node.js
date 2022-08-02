
const express = require('express');
const bookController = require('../controllers/bookController');

const router = express.Router();

router.post('/rbooks', bookController.search);

module.exports = {
	router
}
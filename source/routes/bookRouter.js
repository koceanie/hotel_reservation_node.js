
const express = require('express');
const bookController = require('../controllers/bookController');

const router = express.Router();

// book 라우터 
router.post('/query', bookController.createNewBook);
router.get('/query', bookController.queryBook);
router.update('/query', bookController.queryBook);
router.delete('/query', bookController.queryBook);

module.exports = {
	router
}
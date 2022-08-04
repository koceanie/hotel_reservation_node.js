
const express = require('express');
const bookController = require('../controllers/bookController');

const router = express.Router();

// book 라우터 
router.post('/query', bookController.createNewBook);
router.get('/query', bookController.queryBook);
router.patch('/query', bookController.updateBook);
router.delete('/query', bookController.deleteBook);

module.exports = {
	router
}
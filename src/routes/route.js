const express = require('express');
const router = express.Router();
const book = require("../controllers/bookController")
 
router.post('/createBook', book.createBook);
 
router.get('/bookList', book.bookList);
 
router.post('/getBooksInYear', book.getBooksInYear)

module.exports = router;
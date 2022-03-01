const express = require('express');
const router = express.Router();
const allController= require("../controllers/allControllers")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post('/createNewAuthor', allController.createNewAuthor)
router.post('/createNewBook', allController.createNewBook)
router.get('/allBooks', allController.allBooks)
router.get('/updatedBookPrice', allController.updatedBookPrice)
router.get('/authorsName', allController.authorsName)


module.exports = router;
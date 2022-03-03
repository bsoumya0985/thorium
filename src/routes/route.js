const express = require('express');
const router = express.Router();

const authorController = require("../controllers/authorController")
const bookController = require("../controllers/bookController")
const publisherController = require("../controllers/publisherController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor)
router.post("/createPublisher", publisherController.createPublisher)
router.put("/createBook", bookController.createBook)
router.get("/getBooks", bookController.getBooks)
router.put("/isHardCover", bookController.isHardCover)
router.put("/updatedHardCopy", bookController.updatedHardCopy)
module.exports = router

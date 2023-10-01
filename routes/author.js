const authorController = require("../controller/authorController");

const router = require("express").Router();

//ADD Author
router.post("/", authorController.addAuthor); 

module.exports = router;
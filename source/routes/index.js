//routes/index.js

const express = require("express");
const router = express.Router();

const bookRouter = require("./bookRouter");
router.use("/api/books", bookRouter.router);

module.exports = router;
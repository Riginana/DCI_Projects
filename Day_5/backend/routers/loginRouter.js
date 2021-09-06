const express = require("express");
const authenticateController = require("../controllers/authenticateController");

const router = express.Router();
router.post("/user", authenticateController.userLogin);

module.exports = router;

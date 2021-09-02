const express = require("express");
const linkController = require("../controllers/crudLinks");

const router = express.Router();
router.post("/", linkController.create);

module.exports = router.post;

const express = require("express");
const create = require("../controllers/crudLinks");

const router = express.Router();
router.post("/", create);

module.exports = router.post;

const express = require("express");
const linkController = require("../controllers/crudLinks");

const router = express.Router();
router.post("/", linkController.create);
router.get("/", linkController.read);

module.exports = router;

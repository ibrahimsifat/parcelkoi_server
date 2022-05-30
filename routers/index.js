const express = require("express");
const { addUser } = require("../controllers/register");
const router = express.Router();

router.get("/register", addUser);

module.exports = router;

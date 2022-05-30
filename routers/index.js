const express = require("express");
const {
  addUser,
  getUser,
  getUserByUsername,
} = require("../controllers/auth/register");
const router = express.Router();

// get user by id
router.get("/user/:username", getUserByUsername);

// get all user
router.get("/user", getUser);

// add user
router.post("/register", addUser);

module.exports = router;

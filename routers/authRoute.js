const express = require("express");

// internal import
const {
  registerController,
  loginController,
} = require("../controllers/auth/auth");
const router = express.Router();

// add user
   router.post("/register", registerController);
router.post("/login", loginController);

module.exports = router;

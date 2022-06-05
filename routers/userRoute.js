const express = require("express");
const {
  getUser,
  getUserByID,
  updateAUser,
  deleteAUser,
} = require("../controllers/users/userController");
const router = express.Router();

// get user by id
router.get("/:id", getUserByID);

// get all user
router.get("/", getUser);

// update a user
router.put("/", updateAUser);

// delete a user
router.delete("/:id", deleteAUser);

module.exports = router;

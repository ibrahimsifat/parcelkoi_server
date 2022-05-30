// internal import
const UserModel = require("../../models/UserModel");
const createError = require("http-errors");

// get user
const getUser = async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.json(users);
  } catch {
    (error) => {
      res.status(500).json({
        error: error.message,
      });
    };
  }
};

// get user by username
const getUserByUsername = async (req, res) => {
  const username = req.params.username;
  const user = await UserModel.find({ username: username });
  res.status(200).json(user);
};
// add user
const addUser = async (req, res) => {
  const userObject = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  };
  const newUser = new UserModel(userObject);
  newUser.save((error, result) => {
    if (error) {
      res.status(401).json({
        error: error.message,
      });
    }
    res.status(200).json({
      result: result,
    });
  });
};

module.exports = { addUser, getUser, getUserByUsername };

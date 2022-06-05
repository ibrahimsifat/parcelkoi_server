// extarnal import
const bcrypt = require("bcrypt");

// internal import
const UserModel = require("../../models/UserModel");

// get user
const getUser = async (req, res, next) => {
  try {
    const users = await UserModel.find({});
    res.json(users);
  } catch {
    (err) => {
      next(err);
    };
  }
};

// get user by username
const getUserByID = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const user = await UserModel.find({ _id: userId });
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

const updateAUser = async (req, res, next) => {
  const userId = req.body._id;
  try {
    const user = await UserModel.findById({ _id: userId });
    const email = req.body.email;
    const username = req.body.username;
    if (user) {
      user.username = username ? username : user.username;
      user.email = email ? email : user.email;
      await user.save();
      res.status(200).json(user);
    } else {
      res.status(404).json({ Error: `user Not found by id: ${userId}` });
    }
  } catch (err) {
    next(err);
  }
};

// delete a user by id
const deleteAUser = async (req, res, next) => {
  try {
    const userId = req.params.id;

    const user = await UserModel.findById(userId);
    if (user) {
      await UserModel.deleteOne({ _id: userId });
      res.status(200).json({ message: "user was deleted" });
    } else {
      res.status(404).json({ massage: `user Not found by id: ${userId}` });
    }
  } catch (err) {
    next(err);
  }
};
module.exports = { getUser, getUserByID, updateAUser, deleteAUser };

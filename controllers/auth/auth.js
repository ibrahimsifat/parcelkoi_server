// external import
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const createError = require("http-errors");

// internal import
const UserModel = require("../../models/UserModel");

// add user
const registerController = async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  const userObject = {
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword,
  };
  try {
    const newUser = new UserModel(userObject);
    const user = await newUser.save();
    res.status(401).json({
      user: user,
    });
  } catch (err) {
    res.status(500).json({
      createError: err.message,
    });
  }
};
// do login
const loginController = async (req, res) => {
  try {
    // find user who has this email/ username
    const user = await UserModel.findOne({
      $or: [{ username: req.body.username }, { email: req.body.username }],
    });
    if (user && user._id) {
      console.log(user.username);
      const isValidPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (isValidPassword) {
        // console.log(isValidPassword);
        // prepare the user object to generate token
        const userObject = {
          userId: user._id,
          username: user.name,
          email: user.email,
        };

        // generate token
        const token = jwt.sign(userObject, process.env.COOKIE_SECRET, {
          expiresIn: process.env.JWT_EXPIRY,
        });

        // set cookie
        res.cookie(process.env.COOKIE_NAME, token, {
          maxAge: process.env.JWT_EXPIRY,
          httpOnly: true,
          signed: true,
        });

        res.json({
          massage: {
            status: "success",
            userInfo: userObject,
          },
        });
      } else {
        res.status(500).json({
          message: "Login failed! Please try again.",
        });
        throw createError("Login failed! Please try again.");
      }
    } else {
      res.status(500).json({
        message: "Login failed! Please try again.",
      });
      throw createError("Login failed! Please try again.");
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = { registerController, loginController };

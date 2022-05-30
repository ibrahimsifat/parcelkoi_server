// extarnal import
const mongoose = require("mongoose");
const validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};
// create user schema
const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
      trim: true,
      lowercase: true,
      validate: [validateEmail, "Please fill a valid email address"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    role: {
      type: [String],
      enum: ["user", "subscriber", "admin", "superAdmin"],
      default: "user",
    },
  },
  { timestamps: true }
);

// create a user model
module.exports = mongoose.model("User", userSchema);

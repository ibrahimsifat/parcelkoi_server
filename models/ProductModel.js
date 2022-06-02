// extarnal import
const mongoose = require("mongoose");

// create user schema
const productSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Username is required"],
      unique: true,
    },
    description: {
      type: String,
      required: [true, "description is required"],
    },
    img: {
      type: String,
      required: [true, "Image is required"],
    },
    categories: {
      type: Array,
    },
    size: {
      type: String,
    },
    color: {
      type: String,
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
    },
  },
  { timestamps: true }
);

// create a user model
module.exports = mongoose.model("Product", productSchema);

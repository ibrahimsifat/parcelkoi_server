// extarnal import
const mongoose = require("mongoose");

// create user schema
const cartSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: [true, "Username is required"],
    },
    products: [
      {
        productId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
  },
  { timestamps: true }
);

// create a user model
module.exports = mongoose.model("Cart", cartSchema);

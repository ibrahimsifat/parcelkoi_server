// extarnal import
const mongoose = require("mongoose");

// create user schema
const orderSchema = mongoose.Schema(
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
    amount: { type: Number, required: true },
    address: { type: Object, required: true },
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);

// create a user model
module.exports = mongoose.model("Order", orderSchema);

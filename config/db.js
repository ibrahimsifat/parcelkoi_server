const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(" database connected");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectDB;

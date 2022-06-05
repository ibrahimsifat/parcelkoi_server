// external import
const express = require("express");
const connectDB = require("../config/db");
require("dotenv").config("../.env");
const cookieParser = require("cookie-parser");
const app = express();

// internal import
const { notFoundHandler, errorHandler } = require("./errorMeddleware");

// database connection
connectDB();

// middleware
app.use(express.json());

// parsing cookies
app.use(cookieParser(process.env.COOKIE_PARSER));

// route
app.use("/api/v1/auth", require("../routers/authRoute"));
app.use("/api/v1/user", require("../routers/userRoute"));

// error handler
app.use(errorHandler);

// not found handler
app.use(notFoundHandler);
module.exports = app;

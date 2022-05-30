// external import
const express = require("express");
const connectDB = require("../config/db");
require("dotenv").config("../.env");
const app = express();

// internal import
const { notFoundHandler, errorHandler } = require("./errorMeddleware");

// database connection
connectDB();

// middleware
app.use(express.json());
// route
app.use("/api/v1", require("../routers/index"));

// error handler
app.use(errorHandler);

// not found handler
app.use(notFoundHandler);
module.exports = app;

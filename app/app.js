// external import
const express = require("express");
const app = express();

// internal import
const { notFoundHandler, errorHandler } = require("./error");

// route
app.use("/api/v1", require("../routers/index"));

// error handler
app.use(errorHandler);

// not found handler
app.use(notFoundHandler);
module.exports = app;

const createError = require("http-errors");
const { GeneralError } = require("../utils/errors");

// 404 not found handler
function notFoundHandler(req, res, next) {
  next(createError(404, "Your requested content was not found!"));
}

// default error handler
function errorHandler(err, req, res, next) {
  res.status(err.status || 500);

  if (err instanceof GeneralError) {
    const code = err.getCode();
    return res.status(code).json({ name: err.name, message: err.message });
  }
  return res.status(500).json({
    name: "Internal server Error",
    message: err.message,
  });
}

module.exports = {
  notFoundHandler,
  errorHandler,
};

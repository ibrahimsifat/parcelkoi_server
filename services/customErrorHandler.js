class CustomErrorHandler extends Error {
  constructor(status, message) {
    this.status = status;
    this.message = message;
  }
  customError(status, message) {
    return new CustomErrorHandler(status, message);
  }
}
module.exports = CustomErrorHandler;

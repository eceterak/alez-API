module.exports = class ErrorResponse {
  constructor(message, statusCode) {
    this.message = message;
    this.statusCode = statusCode;
    this.stack = new Error().stack;
  }
};

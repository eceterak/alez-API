class ErrorResponse extends Error {
  constructor(message, type, err) {
    super(message);
    this.type = type;
    this.error = err;
  }
}

module.exports = ErrorResponse;

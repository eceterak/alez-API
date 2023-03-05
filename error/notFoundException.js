const ErrorResponse = require('./errorResponse');

class NotFoundException extends ErrorResponse {
  constructor(message) {
    super(message);
    this.statusCode = 404;
  }
}

module.exports = NotFoundException;

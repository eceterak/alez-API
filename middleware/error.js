const ErrorResponse = require('../error/ErrorResponse');
const { strBetweenChar } = require('../utils/helpers');

module.exports = (err, req, res, next) => {
  // Log to console for development
  console.log(err.stack.red);

  let error = { ...err, message: err.message };
  let modelName = 'resource';

  // Find the model name
  if (error.message.includes('model')) {
    const msg = error.message.substring(error.message.indexOf('model'));
    modelName = strBetweenChar(msg, '"');
  }

  // Mongoose bad ObjectId
  if (err.name === 'CastError') {
    err = new ErrorResponse(`${modelName} not found with id of ${err.value}`, 404);
  }

  // Mongoose duplicate key
  if (err.code === 11000) {
    err = new ErrorResponse(`Duplicate field value entered`, 400);
  }

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map((val) => {
      return { path: val.properties.type, type: val.properties.path, message: val.properties.message };
    });
    err = new ErrorResponse(message, 400);
  }

  res.status(err.statusCode || 500).json({
    success: false,
    error: err.message,
  });
};

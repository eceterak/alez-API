module.exports = (err, req, res, next) => {
  // Log to console for development
  //console.log(err.stack.red);
  //console.log(err);
  let message = `mongoose error`;
  let statusCode = 500;

  if (err.type === 'CastError') {
    message = `${err.message} not found with id of ${err.error.value}`;
    statusCode = 404;
  }

  res.status(statusCode || 500).json({
    success: false,
    error: message,
  });
};

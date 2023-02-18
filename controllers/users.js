// @desc    Get all users
// @route   GET /api/v1/users
// @access  Public
exports.getUsers = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: {},
    message: '',
  });
};

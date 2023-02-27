const User = require('../models/User');

// @desc    Create new user
// @route   GET /api/v1/users
// @access  Public
exports.createUser = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({
      success: true,
      data: user,
      message: '',
    });
  } catch (err) {
    res.status(400).json({
      success: false,
    });
  }
};

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

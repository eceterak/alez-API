const User = require('../models/User');
const NotFoundException = require('../error/NotFoundException');

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
    next(err);
  }
};

// @desc    Get single user
// @route   GET /api/v1/users/:id
// @access  Public
exports.getUser = async (req, res, next) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id, 'user');
    if (!user) {
      // Resource of $id is not found
      throw new NotFoundException(id, 'user');
    }

    res.status(200).json({
      success: true,
      data: user,
      message: '',
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Get all users
// @route   GET /api/v1/users
// @access  Public
exports.getUsers = (req, res) => {
  res.status(200).json({
    success: true,
    data: {},
    message: '',
  });
};

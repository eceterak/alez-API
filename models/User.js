const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please add a name'],
    trim: true,
    maxlength: [50, 'Username can not be more than 50 characters'],
  },
});

module.exports = mongoose.model('User', UserSchema);

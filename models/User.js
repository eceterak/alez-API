const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: [true, 'Please add a name'],
    trim: true,
  },
});

module.exports = mongoose.model('User', UserSchema);

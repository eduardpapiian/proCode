const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  login: {
    type: String,
  },
  password: {
    type: String,
    required: true
  }
});

const Model = mongoose.model('User', UserSchema);
module.exports = Model;

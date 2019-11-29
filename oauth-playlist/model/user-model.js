const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username:String,
  googleId:String,
  email:String,
  avatar:String
});

const User1 = mongoose.model('user1', userSchema)

module.exports = User1

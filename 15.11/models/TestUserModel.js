const mongoose = require('mongoose');

const testUserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  password: {
    type: String,
  },
})

module.exports = mongoose.model('testUser', testUserSchema)

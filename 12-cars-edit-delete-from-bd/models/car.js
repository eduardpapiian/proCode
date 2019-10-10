const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CarSchema = new Schema({
  id: {
    type: Number,
  },
  manufacturer: {
    type: String,
  },
  model: {
    type: String,
  },
  price: {
    type: Number,
  }
});

const Model = mongoose.model('Car', CarSchema);
module.exports = Model;

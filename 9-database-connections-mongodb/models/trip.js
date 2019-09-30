const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TripSchema = new Schema({
  fromName: {
    type: String,
    required: true
  },
  toName: {
    type: String,
    required: true
  },
  departAt: {
    type: String,
    required: true
  },
  vehicle: {
    type: String,
    required: true
  }
});

const Model = mongoose.model('Trip', TripSchema);
module.exports = Model;

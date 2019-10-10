const TripModel = require('../models/trip')
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/nodekb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connected to Local DB')
});

const trips = [
  {
    "fromName": "Berlin, Germany",
    "toName": "Kyiv, Ukraine",
    "departAt": "2019-05-29T00:00:00.000Z",
    "vehicle": "plane"
  },
  {
    "fromName": "Berlin, Germany",
    "toName": "Dnipro, Ukraine",
    "departAt": "2019-06-02T00:00:00.000Z",
    "vehicle": "car"
  },
  {
    "fromName": "London, UK",
    "toName": "Kyiv, Ukraine",
    "departAt": "2019-06-07T00:00:00.000Z",
    "vehicle": "plane"
  },
  {
    "fromName": "Lyon, France",
    "toName": "Kyiv, Ukraine",
    "departAt": "2019-06-07T00:00:00.000Z",
    "vehicle": "plane"
  },
  {
    "fromName": "Moscow, Russia",
    "toName": "Kyiv, Ukraine",
    "departAt": "2019-06-08T00:00:00.000Z",
    "vehicle": "car"
  },
  {
    "fromName": "Kyiv, Ukraine",
    "toName": "Berlin, Germany",
    "departAt": "2019-05-30T00:00:00.000Z",
    "vehicle": "train"
  }
]

trips.forEach(val=>{
  saveTrip(val)
});


function saveTrip(data) {
  var myTrip = TripModel(data);
  myTrip.save(function (err) {
    if (err) console.log(err);
    // saved!
  });
}

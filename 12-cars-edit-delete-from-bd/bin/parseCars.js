const cars = require('../dataForParse/cars.json');
const CarModel = require('../models/car')
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/cars', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connected to Local DB in parse Cars')
});


console.log('cars', cars)

cars.data.forEach((val)=>{
  const car = CarModel(val);
  car.save((err)=>{
    if (err) throw err;
    console.log(`${val.manufacturer} saved in DB`)
  });
});

var express = require('express');
var router = express.Router();
const TripModel = require('../models/trip')
/* GET users listing. */
router.get('/getTrip', function(req, res, next) {
  console.log('here we are', req.query.from)
  TripModel.find({fromName: req.query.from}).then(data => res.send(data)).catch(err => console.log(err))
});


module.exports = router;

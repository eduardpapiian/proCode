var express = require('express');
var router = express.Router();
const TripModel = require('../models/trip')

/* GET home page. */
router.get('/', function(req, res, next) {
  TripModel.find({}).then(data => res.render('./', {data:data})).catch(err => console.log(err))
});

module.exports = router;

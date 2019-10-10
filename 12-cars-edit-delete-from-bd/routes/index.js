var express = require('express');
var router = express.Router();
const CarModel = require('../models/car')


/* GET home page. */
router.get('/', function(req, res, next) {
  CarModel.find({}).then(data => {
    console.log('data', data)
    res.render('index', { data: data })
  }).catch(err => console.log(err));
});

module.exports = router;

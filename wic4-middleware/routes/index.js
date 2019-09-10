var express = require('express');
var router = express.Router();
const { time } = require('../utils/middleware.js');

/* GET home page. */
router.get('/', time, function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

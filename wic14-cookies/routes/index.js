var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.cookie('myCookie', 'Express').end('cookies sent');
});

module.exports = router;

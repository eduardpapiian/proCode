var express = require('express');
var router = express.Router();
const { checker } = require('../middleware/checker.js');


/* GET users listing. */
router.get('/', checker, function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

var express = require('express');
var router = express.Router();
const verify = require('../validateToken');


/* GET users listing. */
router.get('/', verify, async function(req, res, next) {
  // res.send('respond with a resource');
});

module.exports = router;

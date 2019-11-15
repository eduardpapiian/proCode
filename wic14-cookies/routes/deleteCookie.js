var express = require('express');
var router = express.Router();
const { midleware } = require('../middleware/middleware.js');


/* GET users listing. */
router.get('/', midleware, function(req, res, next) {
  console.log('red', req.baseUrl === '/delete-cookie')
  // if(req.baseUrl === '/delete-cookie'){
  //
  // }
  res.send('delete cookie');
});

module.exports = router;

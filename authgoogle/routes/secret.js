var express = require('express');
var router = express.Router();
const passport = require('passport')

/* GET home page. */
router.get('/', passport.authenticate('google', {failureRedirect:'/'}),  function(req, res, next) {
  res.send('secret');
});
module.exports = router;

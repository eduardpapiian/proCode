var express = require('express');
var router = express.Router();
const passport = require('passport')

/* GET home page. */
router.get('/', passport.authenticate('google', {scope:['profile']}),  function(req, res, next) {
  res.render('googlePage');
});

/* GET home page. */
router.get('/cb', passport.authenticate('google', {failureRedirect:'/'}),  function(req, res, next) {
  res.send('ok');
});
module.exports = router;

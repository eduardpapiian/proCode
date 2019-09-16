var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  if(typeof req.body === "object"){
    if(req.body.name.length < 2 && req.body.name.length > 30){
        res.send('Name Error')
    }
    if(req.body.username.length < 2 && req.body.username.length > 30){
        res.send('Username Error')
    }
    if(req.body.pwd.length < 2 && req.body.pwd.length > 30){
        res.send('Password Error')
    }
    if(typeof req.body.profile !== "object"){
        res.send('Profile Error')
    }
    if(typeof req.body.profile.age !== "number" && req.body.profile.age > 130){
        res.send('Age Error')
    }
    else{
        res.send('Ok')
    }
  }else{
    res.send('Body Type Error')
  }
});


module.exports = router;

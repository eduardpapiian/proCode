var express = require('express');
var router = express.Router();
const UserModel = require('../models/user')

router.post('/login', function(req, res, next) {
  const { email, password } = req.body
  // const user = new UserModel({
  //   email: email,
  //   password: password
  // })
  UserModel.findOne({
    email: req.body.email,
    password: req.body.password
  }).then(data => {
    if(data){
      res.render('respPage', {message: 'FIND USER'})
    }else{
      res.render('respPage', {message: 'USER NOT FIND'})
    }
  }
  ).catch(err => console.log(err))
});

router.post('/register', function(req, res, next) {
  const { email, login, password  } = req.body
  UserModel.findOne({email:email}).then(data => {
    if(data){
      res.render('respPage', {message: 'USER ALREADY EXIST'})
    }
  })
  const user = UserModel(req.body)
  user.save(function (err) {
    if (err) console.log(err);
    // saved!
    res.render('respPage', {message: 'USER SAVED'})
  })
});

module.exports = router;

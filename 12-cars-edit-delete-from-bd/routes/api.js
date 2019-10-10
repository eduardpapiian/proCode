var express = require('express');
var router = express.Router();
const CarModel = require('../models/car')


router.post('/delete', function(req, res, next) {
  const { id } = req.body
  CarModel.findOneAndDelete({id:id}).then(
    data => {
      console.log('data', data)
      if(data !== null){
        res.send('ok')
      }else{
        res.send('cant find car')
      }
    }
  ).catch(err => res.sendStatus(404))
});

router.get('/carList', function(req, res, next) {
  CarModel.find({}).then(data => {
    console.log('data', data)
    res.send(data)
  }).catch(err => console.log(err));
});

module.exports = router;

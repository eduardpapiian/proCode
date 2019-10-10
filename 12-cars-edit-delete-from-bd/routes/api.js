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

router.post('/update', function(req, res, next) {
  const { id , newPrice } = req.body
  CarModel.findOneAndUpdate({id:id}, {price: newPrice}).then(
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

router.post('/create', function(req, res, next) {
  CarModel.find({}).then(data => {
    console.log('data', data)
    if(data.length){
      const arg = Number(data[data.length - 1].id) + 1;
      console.log('arg', arg)
      CarModel.findOne({id:arg}).then(data => {
        if(data){
          res.sendStatus(404)
        }else{
          req.body.id = arg
          const car = CarModel(req.body)
          car.save(function (err) {
            if (err) console.log(err);
            // saved!
            res.send('ok')
          })
        }
      })
    }else{
      req.body.id = 1
      const car = CarModel(req.body)
      car.save(function (err) {
        if (err) console.log(err);
        // saved!
        res.send('ok')
      })
    }
  }).catch(err => console.log(err))
});


module.exports = router;

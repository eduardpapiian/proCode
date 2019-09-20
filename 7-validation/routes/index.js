var express = require('express');
const Ajv = require('ajv');
const carSchema = require('../schems/car');

var router = express.Router();

const ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.post('/', (req, res) => {
  console.log(req.body.model);
  const validate = ajv.compile(carSchema);
  const valid = validate({
    model: req.body.model,
    mileage: req.body.mileage,
    price: req.body.price,
    functions: req.body.functions,
  });
  if (!valid) {
    const { errors } = validate;

    const result = {
      status: 'invalid data',
      payload: { errors },
    };
    console.log(result.payload);
    res.json(result.payload.errors);
  }else{
    res.send('valid')
  }
});

module.exports = router;

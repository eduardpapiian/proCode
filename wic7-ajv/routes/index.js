const express = require('express');
const Ajv = require('ajv');
const userSchema = require('../schemas/user');

const router = express.Router();

const ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}


/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});


router.post('/', (req, res) => {
  console.log(req.body.name);
  const validate = ajv.compile(userSchema);
  const valid = validate({
    name: req.body.name,
    userName: req.body.name,
    pwd: req.body.pwd,
    profile: req.body.profile,
  });
  if (!valid) {
    const { errors } = validate;

    const result = {
      status: 'invalid data',
      payload: { errors },
    };
    console.log(result.payload.errors);
    res.json(result.payload.errors);
  }
});

module.exports = router;

const jwt = require('jsonwebtoken');
var express = require('express');
var router = express.Router();
const { createTestUser } = require('../controllers/testUserConstroller');

router.post('/register' , async (req, res) => {

  try{
    const data = await createTestUser(req)
    // cteate a token
    const token = jwt.sign({ _id: data._id }, 'dfgdfgasdgwhtryoildasa');
    res.header('auth-token', token).send({token: token});
  }catch(err){
    console.log('1', err)
    res.status(400).send({message: 'Error'});
  }

})

module.exports = router;

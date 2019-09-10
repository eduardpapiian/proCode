var express = require('express');
var router = express.Router();
const { auth } = require('../utils/middleware2.js');



router.get('/', auth, function(req, res, next) {
    res.render('index', { title: 'Express111' });
});

module.exports = router;
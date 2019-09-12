var express = require('express');
var router = express.Router();
const data = require('../storage/cars.json')

/* GET users listing. */
router.get('/:id', function(req, res, next) {
    data.data.forEach(val =>{
        if(val.id === Number(req.params.id)){
            res.send(val)
        }
    })
});

module.exports = router;
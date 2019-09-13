var express = require('express');
var router = express.Router();
const data = require('../storage/cars.json')

/* GET users listing. */
router.get('/:id', function(req, res, next) {
    let result = findCar(data.data, req.params.id)
    result ? res.send(result) : res.status(404).send('Not found');
});

function findCar(arr, val){
    console.log('arr', arr, 'val', val)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === Number(val)) {
            return arr[i]
        }
    }
    return false
}

module.exports = router;

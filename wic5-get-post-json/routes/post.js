var express = require('express');
var router = express.Router();
const data = require('../storage/cars.json')
var fs = require('fs');
const filepath = process.cwd() + '/storage/cars.json'

router.post('/', (req, res) =>{
    const arg = Number(data.data[data.data.length - 1].id) + 1
    var obj = {
        id: arg,
        manufacturer: req.body.name,
        model: req.body.model,
        price: req.body.price
    }
    console.log('obj', obj)
    console.log('data', data.data)
    let newData = data.data.push(obj)

    fs.appendFile(filepath, newData)

    // newData = newData
    console.log(newData)
    res.send(JSON.stringify(newData))
    console.log('filepath', filepath)
})


module.exports = router;
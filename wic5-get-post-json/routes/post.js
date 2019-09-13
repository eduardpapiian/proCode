var express = require('express');
var router = express.Router();
// const data = require('../storage/cars.json')
const path = require('path');
var fs = require('fs-extra');

router.post('/', (req, res) =>{
    const filepath = path.join(__dirname, '../storage/cars.json')
    fs.readFile(filepath, 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
            console.log('data', data);
            const objFromJson = JSON.parse(data);
            console.log('objFromJson', objFromJson);
            const arg = Number(objFromJson.data[objFromJson.data.length - 1].id) + 1;
            const obj = {
                id: arg,
                manufacturer: req.body.name,
                model: req.body.model,
                price: req.body.price
            };
            objFromJson.data.push(obj);
            const json = JSON.stringify(objFromJson)
            fs.writeFile(filepath, json, err => {
                console.log('SAVE ERROR', err)
            })
            res.send(objFromJson)
        }
    })
})


module.exports = router;

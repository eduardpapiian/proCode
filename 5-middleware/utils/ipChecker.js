const os = require('os');
const fs = require('fs-extra')
const path = require('path');
const filepath = path.join(__dirname, '../logs/logs.txt')

console.log('filepath', filepath)
module.exports.ipChecker = function(req, res, next){
    console.log('req.ip', req.ip)
    fs.readFile(filepath, 'utf-8').then(text => {
        // console.log('FILE TEXT:', text)
        let charList = text.split('\r\n');
        // console.log('charList, req.ip', charList, req.ip.toString())
        let ifFind = charList.includes(req.ip)
        if(!ifFind){
            console.log('IP NOT FIND')
            fs.appendFile(filepath, req.ip + '\r\n')
        }
    }).catch(err => console.log('READ FILE ERROR', err));
    next()
}

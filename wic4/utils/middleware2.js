var createError = require('http-errors');

module.exports.auth = function(req, res, next){
    console.log('11', req.headers)
    if(req.headers.isauth  === 'true') {
        next()
        console.log(req.headers.isauth)
    }else{
        res.sendStatus(403)
    }
}
module.exports.myError = function(req, res, next){
    if(req.status  === 403) {
        next()
    }else{
        res.sendStatus(403)
    }
}
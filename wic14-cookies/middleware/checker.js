var createError = require('http-errors');

module.exports.checker = function(req, res, next){
  if(req.cookies.myCookie === 'Express'){
    res.json({ok: 'ok'})
  }else{
    next(createError(401));
  }
  next()
}

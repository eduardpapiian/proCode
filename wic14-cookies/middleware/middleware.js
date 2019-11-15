module.exports.midleware = function(req, res, next){
  if(req.cookies.myCookie === 'Express'){
    if(req.baseUrl === '/delete-cookie'){
      res.clearCookie('myCookie')
    }
    console.log('hello')
  }
  next()
}

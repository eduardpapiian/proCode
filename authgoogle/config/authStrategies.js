const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
passport.serializeUser((user, done)=>{
  done(null, user)
})

passport.use(new GoogleStrategy({
clientID: '148526783851-dhb04vs7nase37kebnefgm903musknfn.apps.googleusercontent.com',
clientSecret: 'U8H49ipbodfz7F5LOFirnoMe',
callbackURL: 'http://localhost:3000/auth/google/cb'
}, (accessToken, refreshToken, profile, done)=>{
console.log('123')
  return done(null, {name: 'Vasya'})
}))

module.export = passport

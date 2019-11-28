const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys')
const User1 = require('../model/user-model');


passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done)=> {
  User1.findById(id).then((user) => {
    done(null, user)
  })
})


passport.use(
  new GoogleStrategy({
  //options for strategy
    callbackURL: '/auth/google/redirect',
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret
  }, (accessToken, refreshToken, profile, done) => {
    // passport callback function
    console.log('passport callback function fired')
    console.log(profile)
    //check if user already exist in our db
    User1.findOne({googleId: profile.id}).then((currentUser) =>{
      if(currentUser){
        //already have the user
        console.log('user is:' + currentUser)
        done(null, currentUser)
      }else{
        // if not, create user in our db
        new User1({
          username:profile.displayName,
          googleId:profile.id
        }).save().then((newUser) => {
          console.log('new user created' + newUser);
          done(null, newUser)
        })
      }
    });
  })
);

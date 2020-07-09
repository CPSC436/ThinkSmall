const GoogleStrategy = require('passport-google-oauth20').Strategy
const cookieSession = require('cookie-session')
const passport = require('passport')
const path = require('path')
const User = require('../models/user')

require('dotenv').config({ path: path.join(__dirname, '.env') })

const clientID = process.env.OAUTH_CLIENT_ID
const clientSecret = process.env.OAUTH_CLIENT_SECRET

module.exports = (app) => {
  // Used to stuff a piece of information into a cookie
  passport.serializeUser((user, done) => {
    done(null, user)
  })

  // Used to decode the received cookie and persist session
  passport.deserializeUser((user, done) => {
    User.findById(user).then((u) => {
      done(null, u)
    })
  })

  // OAuth Strategy to get access_token
  passport.use(
    new GoogleStrategy(
      {
        clientID,
        clientSecret,
        callbackURL: '/auth/google/callback'
      },
      (accessToken, refreshToken, profile, done) => {
        User.findOne({ email: profile.emails[0]?.value }).then((existingUser) => {
          if (existingUser) {
            done(null, existingUser)
          } else {
            new User({
              givenName: profile.name.givenName,
              familyName: profile.name.familyName,
              email: profile.emails[0]?.value,
              imageUrl: profile.photos[0]?.value,
            })
              .save()
              .then((user) => done(null, user))
          }
        })
        // Where you verify user on your application 
        // Find or Create a user in your DB and pass it.
        // If you are not using googleapis, you don't need to keep access token anymore. 
        // access token is already used to fetch profile info. 
        done(null, { accessToken, refreshToken, profile })
      }
    )
  )

  // To use cookie session
  app.use(
    cookieSession({
      maxAge: 24 * 60 * 60 * 1000, // One day in milliseconds
      keys: [process.env.COOKIE_KEY] // use to sign & verify cookie values
    })
  )

  app.use(passport.initialize())
  app.use(passport.session())
}

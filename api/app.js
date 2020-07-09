var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cors = require('cors');
var db = require('./db');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const cookieSession = require("cookie-session");
const log = require("debug")("oauth");
//var favicon = require('serve-favicon');

const clientID = process.env.OAUTH_CLIENT_ID;
const clientSecret = process.env.OAUTH_CLIENT_SECRET;
const scope = ["email", "profile"];
//const url = "http://localhost:3000"

var indexRouter = require('./routes/index');
const User = require('./models/user')
const UserController = require('./controllers/user')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// To use cookie session
app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000, // One day in milliseconds
    keys: [ process.env.COOKIE_KEY ] // use to sign & verify cookie values
  })
);
app.use(passport.initialize());
app.use(passport.session());

// OAuth Strategy to get access_token
passport.use(new GoogleStrategy(
  { clientID, 
  clientSecret, 
  callbackURL: '/auth/google/callback' },
  (accessToken, refreshToken, profile, done) => {
    User.findOne({ email: profile.email }).then((existingUser) => {
      if (existingUser) {
        done(null, existingUser);
      } else {
        UserController.createUser({ profile }).then((user) => {
          done(null, user);
        });
      }
    })
      console.log(accessToken);
      console.log(profile);
      // Where you verify user on your application 
      // Find or Create a user in your DB and pass it.
      // If you are not using googleapis, you don't need to keep access token anymore. 
      // access token is already used to fetch profile info. 
      done(null, { accessToken, refreshToken, profile });
    }
  )
);

// Used to stuff a piece of information into a cookie
passport.serializeUser((user, done) => {
  done(null, user);
});

// Used to decode the received cookie and persist session
passport.deserializeUser((user, done) => {
  User.findById(user).then((u) => {
    done(null, u);
  });
});

app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

app.get('/auth/google/callback', 
passport.authenticate('google', { failureRedirect: '/login' }),
function(req, res) {
  // Successful authentication, redirect home.
  res.redirect('/');
});

app.get('/current_user', (req, res) => {
  res.send(req.user);
})

// Middleware to check if the user is authenticated
function isUserAuthenticated(req, res, next) {
  // NOTE: if using jwt, you'd verify the token here. 

  if (req.user) {
    log(`authenticated ${req.user.profile.id}`);
    next();
  } else {
    log('user not authenticated');
    // Path to start auth flow
    res.redirect(oauthPath); 
  }
}

app.use("/", isUserAuthenticated, (req, res) => {
  res.json(req.user);
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

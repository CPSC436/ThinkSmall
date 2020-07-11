require('./db');
var createError = require('http-errors');
var express = require('express');
var favicon = require('serve-favicon');
var path = require('path');
var cors = require('cors');
var auth = require('./init/auth');
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

async function init() {
  app.use(cors());
  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser('anything'));
  app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

  await auth(app);

  app.use('/', indexRouter);

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
}

init()

module.exports = app;

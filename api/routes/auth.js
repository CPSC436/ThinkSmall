const express = require('express')
const passport = require('passport')
const User = require('../models/user')
const bodyParser = require('body-parser')


const router = express.Router()
router.use(bodyParser.urlencoded({ extended: true }))
const scope = ['email', 'profile']

// Oauth Routes
router.get('/auth/google',
  passport.authenticate('google', { scope })
)
router.get('/auth/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/auth/google',
    successRedirect: '/',
  })
)

// local passport routes
router.post('/register', passport.authenticate('local-signup', {
    successRedirect:'/',
    failureRedirect:'/'
    })
)

router.post('/login' ,passport.authenticate('local-login', {
    successRedirect : '/',
    failureRedirect : '/about',
    failureFlash : true
}))


// router.post('/login', function(req, res, next) {
//     passport.authenticate('local-login', function(err, user, info) {
//         console.log('succecss')
//         console.log(user)
//         console.log(req.user)
//     })(req, res, next);
// });

module.exports = router

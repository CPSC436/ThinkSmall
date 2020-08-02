const express = require('express')
const passport = require('passport')
const User = require('../models/user')

const router = express.Router()
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

// Passport-Local Routes
router.post('/register',function(req, res){
    User.register(new User({
        email: req.body.email, givenName: req.body.givenName, familyName: req.body.familyName, available: true
    }), req.body.password, function(err, user) {
        if(err){
            console.log(err);
            res.redirect('/')
        }
        passport.authenticate("local")(req, res, function(){
            res.redirect('/')
        })
    })
})
// possible issue may need failure redirect
router.post("/login", passport.authenticate("local", {
    successRedirect: "/",
    failureFlash: true
}))


module.exports = router

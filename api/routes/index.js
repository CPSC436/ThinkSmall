var express = require('express')
var router = express.Router()
var auth = require('./auth')
var business = require('./business')
var request = require('./request')
var tag = require('./tag')
var user = require('./user')
var isUserAuthenticated = require('../utils/isUserAuthenticated')

router.get('/', (req, res) => res.render('index', { title: 'Express' }))
router.get('/me', isUserAuthenticated, (req, res) => res.render('profile', {
    user: req.user || {
        "_id": "5f07789480f9ac18d50e7c8e",
        "owns": [],
        "tags": [],
        "available": false,
        "givenName": "Alice",
        "familyName": "Kim",
        "email": "alice828ubc@gmail.com",
        "imageUrl": "https://lh3.googleusercontent.com/a-/AOh14Ggtu9ylzCEzHuUX4TWIWDA0_ta8HJGmabA8x3AX",
        "createdAt": "2020-07-09T20:05:40.511Z",
        "updatedAt": "2020-07-09T20:05:40.511Z",
        "__v": 0
    }
}))

router.use('', auth)
router.use('', business)
router.use('', request)
router.use('', tag)
router.use('', user)

module.exports = router

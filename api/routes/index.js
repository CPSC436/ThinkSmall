var express = require('express');
var router = express.Router();
var business = require('./business');
var request = require('./request');
var tag = require('./tag');
var user = require('./user');
//var authRoutes = require('./authRoutes');

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('', business);
router.use('', request);
router.use('', tag);
router.use('', user);
//router.use('auth/google', authRoutes);

module.exports = router;

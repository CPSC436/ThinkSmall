var express = require('express');
var router = express.Router();
var owner = require('./owner');
var volunteer = require('./volunteer');

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('', owner)
router.use('', volunteer)

module.exports = router;

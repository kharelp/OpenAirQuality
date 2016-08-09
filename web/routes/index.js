var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/arduinosensors', function(req, res, next) {
  res.render('arduinosensors', { title: 'Express' });
});

router.get('/kathmandu', function(req, res, next) {
  res.render('kathmandu', { title: 'Express' });
});

router.get('/springfield', function(req, res, next) {
  res.render('springfield', { title: 'Express' });
});

router.get('/meettheteam', function(req, res, next) {
  res.render('meettheteam', { title: 'Express' });
});


module.exports = router;

var express = require('express');
var router = express.Router();

/* GET meettheteam page. */
router.get('/', function(req, res, next) {
  window.alert('some message');
  res.render('meettheteam', { title: 'Express' });
});

module.exports = router;

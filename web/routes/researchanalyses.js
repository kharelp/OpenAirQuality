var express = require('express');
var router = express.Router();

/* GET researchanalyses page. */
router.get('/researchanalyses', function(req, res, next) {
  res.render('researchanalyses', { title: 'Express' });
});

module.exports = router;

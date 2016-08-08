var express = require('express');
var router = express.Router();

/* GET nepal_latlong page. */
router.get('/nepal_latlong', function(req, res, next) {
  res.render('nepal_latlong', { title: 'Express' });
});

module.exports = router;

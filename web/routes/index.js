var express = require('express');
var router = express.Router();

/*Header for bootstrap for every page*/
var rendervalues = { bootstrap: '<meta charset="utf-8"> \
    <meta http-equiv="X-UA-Compatible" content="IE=edge"> \
    <meta name="viewport" content="width=device-width, initial-scale=1"> \
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags --> \
    <meta name="description" content=""> \
    <meta name="author" content=""> \
    <link rel="icon" href="../../favicon.ico"> \
 \
    <title>Five Colleges Open Air Quality Monitoring Project</title> \
 \
    <!-- Bootstrap core CSS --> \
    <link href="/css/bootstrap.min.css" rel="stylesheet"> \
    <!-- Bootstrap theme --> \
    <link href="/css/bootstrap-theme.min.css" rel="stylesheet"> \
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug --> \
    <link href="/css/ie10-viewport-bug-workaround.css" rel="stylesheet"> \
 \
    <!-- Custom styles for this template --> \
    <link href="theme.css" rel="stylesheet"> \
 \
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries --> \
    <!--[if lt IE 9]> \
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script> \
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script> \
    <![endif]--> \
	 \
	<link type="text/css" rel="stylesheet" href="/css/stylesheet.css"> \
' }

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', rendervalues);
});

router.get('/arduinosensors', function(req, res, next) {
  res.render('arduinosensors', rendervalues);
});

router.get('/kathmandu', function(req, res, next) {
  res.render('kathmandu', rendervalues);
});

router.get('/springfield', function(req, res, next) {
  res.render('springfield', rendervalues);
});

router.get('/meettheteam', function(req, res, next) {
  res.render('meettheteam', rendervalues);
});


module.exports = router;

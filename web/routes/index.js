var express = require('express');
var router = express.Router();

/*Header for bootstrap for every page*/

var commonHeader= '<meta charset="utf-8"> \n\
		<meta http-equiv="X-UA-Compatible" content="IE=edge"> \n\
		<meta name="viewport" content="width=device-width, initial-scale=1"> \n\
		<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags --> \n\
		<meta name="description" content=""> \n\
		<meta name="author" content=""> \n\
		<link rel="icon" href="/images/favicon.ico" /> \n\
 \n\
		<title>Five Colleges Open Air Quality Monitoring Project</title> \n\
 \n\
		<!-- Bootstrap JS --> \n\
 		<script type="text/JavaScript" src="/js/jquery-3.1.0.slim.min.js"></script> \n\
	    <script src="/js/bootstrap.min.js"></script> \n\
		<!-- IE10 viewport hack for Surface/desktop Windows 8 bug --> \n\
		<script src="/js/ie10-viewport-bug-workaround.js"></script> \n\
 	\n\
		<!-- Bootstrap core CSS --> \n\
		<link href="/css/bootstrap.min.css" rel="stylesheet" /> \n\
		<!-- Bootstrap theme --> \n\
		<link href="/css/bootstrap-theme.min.css" rel="stylesheet" /> \n\
		<!-- IE10 viewport hack for Surface/desktop Windows 8 bug --> \n\
		<link href="/css/ie10-viewport-bug-workaround.css" rel="stylesheet" /> \n\
 \n\
		<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries --> \n\
		<!--[if lt IE 9]> \n\
		  <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script> \n\
		  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script> \n\
		<![endif]--> \n\
		\n\
		<link type="text/css" rel="stylesheet" href="/css/stylesheet.css" /> \n\
		<!--Bootstrap footer CSS --> \n\
		<link href="/css/sticky-footer.css" rel="stylesheet">\n\
'
/*Header for Navigation Bar for every page*/
var commonNavigation= '<nav class="navbar navbar-inverse navbar-fixed-top">\n\
		  <div class="container">\n\
			<div class="navbar-header">\n\
			  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">\n\
				<span class="sr-only">Toggle navigation</span>\n\
				<span class="icon-bar"></span>\n\
				<span class="icon-bar"></span>\n\
				<span class="icon-bar"></span>\n\
			  </button>\n\
			  <a class="navbar-brand active" href="/">Open Air Quality</a>\n\
			</div>\n\
			<div id="navbar" class="navbar-collapse collapse">\n\
			  <ul class="nav navbar-nav">\n\
				<li><a href="/arduinosensors">Arduino Sensors</a></li>\n\
				<li><a href="/kathmandu">Kathmandu</a></li>\n\
				<li><a href="/springfield">Springfield</a></li>\n\
				<li><a href="/meettheteam">Meet The Team</a></li>\n\
			  </ul>\n\
			 </div><!--/.nav-collapse -->\n\
		  </div>\n\
		</nav>\n\
'		
var commonFooter= ' <footer class="footer">\n\
      <div class="container">\n\
        <p class="text-muted"><a href="https://github.com/kharelp/UrbanAirQuality>GitHub</a></p>\n\
      </div>\n\
    </footer>\n\
'
var pages = {'/': 'index','/arduinosensors':'arduinosensors', '/kathmandu':'kathmandu', 
					'/springfield':'springfield', '/meettheteam':'meettheteam'}

/* GET pages. */
for (page in pages){
	router.get(page, function(req, res, next) {
		console.log('path requested: ' + req.originalUrl + '; page to be loaded: ' + pages[req.originalUrl]);
		var cn = commonNavigation.replace(req.originalUrl, '#')
		res.render(pages[req.originalUrl],{commonHeader: commonHeader, commonNavigation: cn, commonFooter: commonFooter });
	});
}
module.exports = router;

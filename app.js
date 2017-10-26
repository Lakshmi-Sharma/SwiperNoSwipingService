var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;

app.set('port', (port));

//ROUTES FOR API

var router = express.Router();

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

router.get('/date', function(req, res) {
	var date = new Date();
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var day = date.getDate();
	var hours = date.getHours() + 1;
	var minutes = date.getMinutes() + 1;
	var seconds = date.getSeconds() + 1;
	var str = "" + hours + ":" + minutes + ":" + seconds + " " + 
		month + "/" + day + " " + year;

	res.json({ 
		Date: str,
		year: year,
		month: month,
		day: day,
		hours: hours,
		minutes: minutes,
		seconds: seconds
		});
});


// Set up CORS

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
};
app.use(allowCrossDomain);
app.use('/api', router);

app.listen(port, function() {
  console.log('Node app is running on port' + port);
});

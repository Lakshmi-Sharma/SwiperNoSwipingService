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
	var month = date.getMonth();
	var day = date.getDate();
	var hour = date.getHours();
	var str = "Time now is " + year + month + day + hour;
	res.json({ 
		year: year,
		month: month,
		day: day,
		hour: hour,
		});
});

app.use('/api', router);

app.listen(3000, function(){
	console.log('running');
});

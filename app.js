var express = require('express');
var path = require('path');
var app = express();

app.use(express.static('./assets'));
app.use(express.static('./dist'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.get('/', function (req, res) {

	res.render('main');
});

app.get('/admin', function (req, res) {
	res.render('admin');;
});

app.listen(3000, function () {
	console.log('App running on port 3000!');
});
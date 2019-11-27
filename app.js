var express = require('express');
var path = require('path');
var app = express();

app.use(express.static('./assets'));

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/admin', function (req, res) {
	res.sendFile(path.join(__dirname, 'admin.html'));
});

app.listen(3000, function () {
	console.log('App running on port 3000!');
});
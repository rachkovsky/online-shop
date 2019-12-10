var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var app = express();
var Product = require('./db/schemas/product');

mongoose.connect('mongodb+srv://admin:admin@cluster0-deibq.mongodb.net/test?retryWrites=true&w=majority', function (err) {

	if (err) throw err;
	console.log('Successfully connected');

	const modelProduct = mongoose.model('Product', Product);
	const product = new modelProduct({
		name: 'ololo',
		size: 'ololo',
		id: 'ololo',
		name: 'ololo',
		price: 'ololo',
		size: 'ololo',
		color: 'ololo',
		gender: 'ololo',
		imageUrl: 'ololo'
	});
	product.save(function (err) {
		if (!err) console.log('Success!');
	});
});


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
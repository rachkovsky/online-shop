var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
var productModel = require('./db/models/product');

mongoose.connect('mongodb+srv://admin:admin@cluster0-deibq.mongodb.net/itstep?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useUnifiedTopology: true
},
	function (err) {

		if (err) throw err;
		console.log('Successfully connected');

		// const product = new productModel({
		// 	name: 'ololo2', 
		// 	size: 'ololo2',
		// 	id: 'ololo2',
		// 	name: 'ololo2',
		// 	price: 'ololo2',
		// 	size: 'ololo2',
		// 	color: 'ololo2',
		// 	gender: 'ololo2',
		// 	imageUrl: 'ololo2'
		// });
		// product.save(function (err) {
		// 	if (!err) console.log('Success!');
		// });
	});


app.use(express.static('./assets'));
app.use(express.static('./dist'));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.get('/', function (req, res) {

	res.render('main');
});

app.get('/admin', function (req, res) {
	res.render('admin');;
});

app.get('/products', function (req, res) {
	productModel.find({}, function (err, products) {
		res.send(products);
	});
});

app.post('/add-product', function (req, res) {
	console.log(req.body);
	res.json({
		message: 'success'
	});
});

app.listen(3000, function () {
	console.log('App running on port 3000!');
});
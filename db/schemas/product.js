const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
    name: String,
    size: String,
    id: String,
    name: String,
    price: String,
    size: String,
    color: String,
    gender: String,
    imageUrl: String
});

module.exports = Product;
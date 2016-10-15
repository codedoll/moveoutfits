var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var itemSchema = new Schema({
    'name': String,
    'imgurl': String,
    'order': Number,
    'orderstr': String
});


var Item = mongoose.model('Clothing', itemSchema);

module.exports = Item;

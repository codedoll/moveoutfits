var express  = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

// PORT & MONGODB
var port = process.env.PORT || 3000
var MONGODBURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/moveoutfits'

// CONTROLLERS
var Item = require('./models/item_model.js');
var User = require('./models/user_model.js');

// Connects Mongod
mongoose.connect(MONGODBURI);
app.use(bodyParser.urlencoded({ extended: false }));


// Uses static assets
app.use(express.static('public'));
app.use(bodyParser.json());


// Sends the list of items in the database
app.get('/items', function(req, res) {
    Item.find(function(err, data) {
        res.send(data)
    });
})
//

// Creates Item
app.post('/itemAdd', function(req, res) {
	console.log(req.body);
    Item.create(req.body, function(err, data) {
    	console.log(data);
        res.redirect("/")
    })
});
// end create item


// Indicated mongod is open
mongoose.connection.once('open', function() {
    console.log('mongod open');
})

// Indication that port is open
app.listen(port, function() {
    console.log('listening to port 3000');
})
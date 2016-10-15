var express  = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

// PORT & MONGODB
var port = process.env.PORT || 3000
var MONGODBURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/moveoutfits'


// Index.html
// app.get('/', function(req, res) {
// 	var data = "This is data";
// 	res.send(data);
// })
//


// Connects Mongod
mongoose.connect(MONGODBURI);


// Uses static assets
app.use(express.static('public'));
app.use(bodyParser.json());


// Indicated mongod is open
mongoose.connection.once('open', function() {
    console.log('mongod open');
})

// Indication that port is open
app.listen(port, function() {
    console.log('listening to port 3000');
})
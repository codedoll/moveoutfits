var express = require('express');
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



// ===== FUNCTIONS ===== //

// Sends the list of items in the database
app.get('/items', function(req, res) {
    Item.find({}).sort('order').exec(function(err, docs) {
        res.send(docs)
    });
});
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

// Creates User
app.post('/userAdd', function(req, res) {
    console.log(req.body);
    User.create(req.body, function(err, data) {
        console.log(data);
        res.redirect("/")
    })
});
// end create item


// Saves the new order
// Modifies the index of the item through loop
app.put('/saveNewOrder', function(req, res) {
    var itemIDs = req.body;

    for (var i = 0; i < itemIDs.length; i++) {

        var currentID = itemIDs[i]
        console.log(currentID);
        var currentindex = i;

        Item.findOneAndUpdate({ _id: currentID }, { $set: { order: currentindex } }, { new: true }, function(err, doc) {
            console.log(doc);
        });
    }
});


// Indicated mongod is open
mongoose.connection.once('open', function() {
    console.log('mongod open');
})

// Indication that port is open
app.listen(port, function() {
    console.log('listening to port 3000');
})

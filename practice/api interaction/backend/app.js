var express = require('express');
var app = express();

var BadApi = require('./models/badApi');

var RatingApi = require('./models/ratingApi');


var bodyParser = require('body-parser');
var mongoose = require('mongoose');


app.use(bodyParser.json());
mongoose.connect('mongodb://localhost/apiCollection');
//var db = mongoose.connection;


app.get('/', function(req, res) {
    res.send("working fine");
});


app.get('/api/ratingApi', function(req, res) {
    RatingApi.getRating(function(err, result) {
        if (err) {
            throw err;
        }
        return res.json(result);
    });
});

app.post('/api/badApi', function(req, res) {
	var apiObject = req.body;
    BadApi.addApi(apiObject, function(err, api) {
        if (err) {
            throw err;
        }
        res.json(api);
    });
});

app.listen(3000);
console.log("running at port 3000");

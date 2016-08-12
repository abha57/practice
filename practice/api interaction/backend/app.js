var express = require('express');
var app = express();

BadApi = require('./models/badApi');


var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.get('/', function(req, res) {
    res.send("working fine");
});

app.get('/api/badApi', function(req, res) {
    BadApi.getApi(function(err, api) {
        if (err) {
            throw err;
        }
        res.json(api);
    });
});

app.listen(5000);
console.log("running at port 5000");

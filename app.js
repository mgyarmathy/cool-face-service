var express = require('express');
var app = express();
var cool = require('cool-ascii-faces');

app.get('/', function(req, res) {
    res.send(cool() + '\n')
})

app.listen(80);
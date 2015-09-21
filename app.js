var express = require('express');
var app = express();
var cool = require('cool-ascii-faces');

var port = process.env.PORT || 3000;

app.get('/', function(req, res) {
    res.send(cool() + '\n')
})

app.listen(port, function () {
  console.log('Listening on port ' + port);
});
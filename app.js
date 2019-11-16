var express = require('express');
var app = express();
var cool = require('cool-ascii-faces');

var port = process.env.PORT || 3000;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res) {
    res.send(cool() + '\n')
})

app.listen(port, function () {
  console.log('Listening on port ' + port);
});
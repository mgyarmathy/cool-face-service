const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const faces = require('./faces.js');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

Array.prototype.sample = function() {
  return this[Math.floor(Math.random() * this.length)];
};

Array.prototype.max = function(max) {
  if (max <= 0) {
    return this;
  }
  var arr = [];
  for (var i = 0; i < this.length; i++) {
    if (this[i].length <= max) {
      arr.push(this[i]);
    }
  }
  return arr;
};

app.get('/', function(req, res) {
  console.log(req);
  const max_face_length = (req.query.max_face_length) ? req.query.max_face_length : 0;
  res.send(faces.max(max_face_length).sample() + '\n');
});

app.listen(port, function() {
  console.log('Listening on port ' + port);
});
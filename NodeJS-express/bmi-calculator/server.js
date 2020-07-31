//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.listen(3000, function() {
  console.log('Server has started on port 3000!');
});

app.get("/", function(req,res) {
  res.sendFile(__dirname + '/index.html');
});

app.post("/", function(req,res) {

  var height = parseFloat(req.body.height);
  var weight = parseFloat(req.body.weight);

  var bmi = weight / (height*height);

  res.send('BMI is : ' + bmi);
});

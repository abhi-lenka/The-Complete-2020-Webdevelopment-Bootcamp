//jshint esversion:6

const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res) {

  const city = req.body.cityName;
  const apiKey = "needs an api key";
  const units = "metric";
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=" + units + "&appid=" + apiKey;

  https.get(url, function(response) {
    console.log(response.statusCode);

    response.on("data", function(data) {

      const weatherData = JSON.parse(data);
      const icon = weatherData.weather[0].icon;
      const imageUrl = "https://openweathermap.org/img/wn/" + icon + "@2x.png";

      res.write('<p>The weather is ' + weatherData.weather[0].description + '</p>');
      res.write('<h1>The temperature in ' + city + ' is : ' + weatherData.main.temp + ' degree Celcius.</h1>');
      res.write('<img src=' + imageUrl + '>');
      res.send();
    });
  });
})


app.listen(3000, function() {
  console.log('The server is running at port 3000.')
});

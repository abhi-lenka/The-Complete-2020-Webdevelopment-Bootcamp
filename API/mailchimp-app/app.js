//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html");
})

app.post("/", function(request, resp) {

  const firstName = request.body.fName;
  const lastName = request.body.lName;
  const email = request.body.email;

  const data = {
    members: [{
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName
      }
    }]
  };

  const jsonData = JSON.stringify(data);

  const url = "yourmailchimp list url";

  const options = {
    method: "POST",
    auth: "your auth in mailchimp"
  };


  const req = https.request(url, options, function(response) {

    if (response.statusCode === 200) {
      resp.sendFile(__dirname + "/success.html");
    } else {
      resp.sendFile(__dirname + "/failure.html");
    }

    response.on("data", function(data) {
      console.log(JSON.parse(data));
    });
  });

  req.write(jsonData);
  req.end();
});

app.post("/failure", function(req, res){
  res.redirect("/");
})

app.listen(3000, function() {
  console.log("Server is Running at part 3000!");
});

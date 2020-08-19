// creating a basic server using express
var express = require("express"); //we are using the require function to include the "express module."
var app = express(); //crerating an object for the express module
app.get("/", function (req, res) {
  //creating a call back function
  res.send("Hello Omprakash!"); //sending response message
});
var server = app.listen(3000, function () {
  //server where we will listen @3000
  console.log("server is listining on port 3000");
});

// routes
app.route("/Node").get(function (req, res) {
  res.send("Tutorial on Node");
});
app.route("/Angular").get(function (req, res) {
  res.send("Tutorial on Angular");
});
app.get("/", function (req, res) {
  res.send("Welcome to incredible india");
});

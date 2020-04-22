var express = require("express");
var app = express();
var path = require("path");

// viewed at http://localhost:8080
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});
app.get("/login", function (req, res) {
  res.sendFile(path.join(__dirname + "/Template/Asset/Public/login.html"));
});
app.get("/order", function (req, res) {
  res.sendFile(path.join(__dirname + "/Template/Asset/Public/order.html"));
});
app.get("/profile", function (req, res) {
  res.sendFile(path.join(__dirname + "/Template/Asset/Public/profile.html"));
});
app.listen(process.env.PORT || 8080);

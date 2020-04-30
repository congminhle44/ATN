var express = require("express");
var app = express();
var path = require("path");

app.use(express.static("public"));

// viewed at http://localhost:8080
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});
app.get("/login", function (req, res) {
  res.sendFile(path.join(__dirname + "/public/login.html"));
});
app.get("/order", function (req, res) {
  res.sendFile(path.join(__dirname + "/public/order.html"));
});
app.get("/maSP=:id", function (req, res) {
  res.sendFile(path.join(__dirname + "/public/detail-product.html"));
});
app.get("/report", function (req, res) {
  res.sendFile(path.join(__dirname + "/public/report.html"));
});
app.get("/profile", function (req, res) {
  res.sendFile(path.join(__dirname + "/public/profile.html"));
});
app.get("/employee", function (req, res) {
  res.sendFile(path.join(__dirname + "/public/employee.html"));
});
app.get("/product-report", function (req, res) {
  res.sendFile(path.join(__dirname + "/public/product.html"));
});
app.listen(process.env.PORT || 8080);

var express = require("express");
var app = express();

app.get("/", function (req, res) {
  console.log("Hello Express!!");
});

app.listen(3000);

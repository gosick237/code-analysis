var express = require("express");
var router = express.Router();

// router.use(function (req, res, next) {
//   next();
// });

router.get("/", function (req, res) {
  console.log("input checker: ", req.body);
  res.send("<h2>Code Test Page</h2><p>code analysis</p>");
});

module.exports = router;

var express = require("express");
var router = express.Router();

// router.use(function (req, res, next) {
//   next();
// });

router.get("/", (req, res) => {
  res.send({ test: "SCA" });
});

module.exports = router;

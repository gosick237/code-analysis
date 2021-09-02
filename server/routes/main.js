var express = require("express");
var router = express.Router();
const codeTestPage = require("./code-test");

router.use("/code-test", codeTestPage);

router.get("/", function (req, res) {
  res.send("<h2>Main Page</h2><p>Hello!!</p>");
});

module.exports = router;

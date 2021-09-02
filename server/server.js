const port = 3001;
const express = require("express");
const app = express();
const mainPage = require("./routes/main");
const testAPI = require("./controller/test");

app.use("/", mainPage);

app.use("/test", testAPI);

// Server Setting
app.listen(port, function () {
  console.log(`Connected on (port number: ${port})`);
});

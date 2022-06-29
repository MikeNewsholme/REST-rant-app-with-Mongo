const express = require("express");
const app = express();
app.get("/", function (res, req) {
  res.setEncoding("Hello World!");
});
app.listen(3000);

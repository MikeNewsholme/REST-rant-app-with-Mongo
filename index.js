require('dotenv').config()
const express = require("express");
const app = express();
app.get("/", function (res, req) {
  res.setEncoding("Hello World!");
});
app.get('*', (req,res) =>{
    res.status(404).send('<h1> 404 Page</h1>')
})
app.listen(process.env.PORT);

//modules and globals
require("dotenv").config();
const express = require("express");
const app = express();

//express settings
app.set('views', __dirname + '/views')
app.set('view engine','jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))


//controllers and routes
app.use("/places", require("./controllers/places"));

app.get("/", (req, res) => {
  res.render('places/home')
  //res.send("Hello world!");
});

app.get("*", (req, res) => {
  res.render('places/error404')
  //res.status(404).send("<h1>404 Page</h1>");
});


//listening for connections
app.listen(process.env.PORT);

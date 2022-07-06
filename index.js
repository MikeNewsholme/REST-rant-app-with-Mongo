//modules and globals
require("dotenv").config();
const express = require("express");
const app = express();
const methodOverride = require("method-override");

//express settings
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.set('views', __dirname + '/views')
app.set('view engine','jsx')
app.engine('jsx', require('express-react-views').createEngine())



//import router
app.use("/places", require("./controllers/places"));

//homepage route
app.get("/", (req, res) => {
  res.render('home')
  
});
//404 page
app.get("*", (req, res) => {
  res.render('error404')
 
});


//listening for connections
app.listen(process.env.PORT, () =>{
  console.log("HI!")
});

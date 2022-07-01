const router = require("express").Router();

router.get("/", (req, res) => {
  let places = [{
    name: 'H-Thai-ML',
    city: "Seattle",
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: 'Http://placekitten.com/250/250'

  }, {
    name:'Coding Cat Cafe',
    city: "Phoenix",
    state:'AZ',
    cuisines: "coffee, Bakery",
    pic:'http://placekitten.com/250/250'
  }]
  res.render('places/index', {places})
  //res.send("GET /places");
});
// GET /places



module.exports = router;

const router = require("express").Router();

router.get("/", (req, res) => {
  let places = [
    {
      name: "H-Thai-ML",
      city: "Seattle",
      state: "WA",
      cuisines: "Thai, Pan-Asian",
      pic: "images/bird.jpg",
    },
    {
      name: "Coding Cat Cafe",
      city: "Phoenix",
      state: "AZ",
      cuisines: "coffee, Bakery",
      pic: "images/van.jpg",
    },
  ];
  res.render('places/index', {places})
  //res.send("GET /places");
});
// GET /places



module.exports = router;

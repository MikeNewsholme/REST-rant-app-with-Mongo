const db = require("../models");

//To use await, we need an async function!
async function seed() {
  //get the HTHAIML place
  let place = await db.Place.findOne({ name: "H-Thai-ML" });

  //create a fake sample comment.
  let comment = await db.Comment.create({
    author: "Famished Fran",
    rant: false,
    stars: 5.0,
    content: "Wow, simply amazing! Would eat here 3 more times",
  });

  // add that comment to the place's comment array
  place.comments.push(comment.id);

  //save that place now that it has comment
  await place.save();

  //exit the program
  process.exit();
}

seed();

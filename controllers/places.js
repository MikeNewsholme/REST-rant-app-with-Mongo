const router = require("express").Router();
const express = require("express");
const { trusted } = require("mongoose");
const db = require("../models");

//INDEX ROUTE
router.get("/", (req, res) => {
  db.Place.find()
    .then((places) => {
      res.render("places/index", { places });
    })
    .catch((err) => {
      console.log(err);
      res.render("error404");
    });
});
//POST ROUTE
router.post("/", (req, res) => {
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = "http://placekitten.com/400/400";
  }

  db.Place.create(req.body)
    .then(() => {
      res.redirect("/places");
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});

//NEW
router.get("/new", (req, res) => {
  res.render("places/new");
});

//show
router.get("/:id", (req, res) => {
  db.Place.findById(req.params.id)
    .populate("comments")
    .then((place) => {
      console.log(place.comments);
      res.render("places/show", { place });
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});

router.put("/:id", (req, res) => {
  db.Place.findByIdAndUpdate(req.params.id, req.body)
  .then(() => {
    res.redirect(`/places/${req.params.id}`)
  })
  .catch(err=> {
    console.log ('err', err)
    res.render('error404')
  })
});

//EDIT
router.get("/:id/edit", (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => {
    res.render('places/edit', {place})
  })
  .catch(err => {
    res.render('error404')
  })
});

//DELETE
router.delete("/:id", (req, res) => {
  db.Place.findByIdAndDelete(req.params.id).then((deleteBread) => {
    res.status(303).redirect("/places");
  });
});
//Rants
router.post("/:id/comment", (req, res) => {
  console.log(req.params.id);
  req.body.rant = req.body.rant ? true : false;
  if (req.body.author === "") {
    req.body.author = undefined;
  }
  if (req.body.content === "") {
    req.body.content = undefined;
  }
  console.log(req.body);
  db.Place.findById(req.params.id)
    .then((place) => {
      db.Comment.create(req.body)
        .then((comment) => {
          place.comments.push(comment.id);
          place.save().then(() => {
            res.redirect(`/places/${req.params.id}`);
          });
        })
        .catch((err) => {
          res.render("error404");
        });
    })
    .catch((err) => {
      res.render("error404");
    });
  //res.send('POST /places/:id/comment stub')
});

router.delete("/:id/rant/:rantId", (req, res) => {
  res.send("GET /places/:id/rant/:rantId stub");
});

module.exports = router;

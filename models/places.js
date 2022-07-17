const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: { type: String, default: "https://www.placecage.com/c/200/300" },
  cuisines: { type: String, required: true },
  city: { type: String, default: "Anytown" },
  state: { type: String, default: "USA" },
  founded: {
    type: Number,
    min: [1673, "surely not that old?!"],
    max: [new Date().getFullYear(), "Hey, this year is in the future!"],
  },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
});

placeSchema.methods.showEstablished= function() {
    return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
}

 module.exports = mongoose.model('place', placeSchema)
 
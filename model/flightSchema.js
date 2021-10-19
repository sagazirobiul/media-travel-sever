const mongoose = require("mongoose");

const flightSchema = mongoose.Schema({
  flightName: {
    type: String,
    required: true,
  },
  flightFrom: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  flightTo: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  images: {
    type: Object,
    required: true,
  },
  image_id: {
    type: String,
    required: true,
  },
});

const Flight = mongoose.model("Flight", flightSchema);

module.exports = Flight;
const mongoose = require("mongoose");

const cruiseSchema = mongoose.Schema({
  cruiseName: {
    type: String,
    required: true,
  },
  sailFrom: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  sailTo: {
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

const Cruise = mongoose.model("Cruise", cruiseSchema);

module.exports = Cruise;
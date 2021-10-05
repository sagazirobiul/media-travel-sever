const mongoose = require("mongoose");

const cruiseSchema = mongoose.Schema({
  cruiseName: {
    type: String,
    required: true,
  },
  service: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  cruiseType: {
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
});

const Cruise = mongoose.model("Cruise", cruiseSchema);

module.exports = Cruise;
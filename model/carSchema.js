const mongoose = require("mongoose");

const carSchema = mongoose.Schema({
  carName: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  carType: {
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

const Car = mongoose.model("Car", carSchema);

module.exports = Car;
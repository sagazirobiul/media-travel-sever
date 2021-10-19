const mongoose = require("mongoose");

const carBookingSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  pickUp: {
    type: String,
    required: true,
  },
  returning: {
    type: String,
    required: true,
  },
  checkIn: {
    type: Date,
    required: true,
  },
  checkOut: {
    type: Date,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  cardId: {
    type: String,
    required: true,
  },
  paymentTime: {
      type: Date,
      required: true
  }
});

const CarBooking = mongoose.model("CarBooking", carBookingSchema);

module.exports = CarBooking;
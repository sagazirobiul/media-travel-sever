const mongoose = require("mongoose");

const cruisesBookingSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  ports: {
    type: String,
    required: true,
  },
  ships: {
    type: String,
    required: true,
  },
  cabin: {
    type: String,
    required: true,
  },
  checkIn: {
    type: String,
    required: true,
  },
  checkOut: {
    type: String,
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

const cruisesBooking = mongoose.model("cruisesBooking", cruisesBookingSchema);

module.exports = cruisesBooking;
const mongoose = require("mongoose");

const cruisesBookingSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  sailFrom: {
    type: String,
    required: true,
  },
  sailTo: {
    type: String,
    required: true,
  },
  cruiseName: {
    type: String,
    required: true,
  },
  cabin: {
    type: String,
    required: true,
  },
  checkIn: {
    type: String,
    required: true
  },
  checkOut: {
    type: String,
    required: true
  },
  totalPrice: {
    type: String,
    required: true,
  },
  paymentId: {
      type: String,
      required: true
  },
  paymentTime: {
      type: Date,
      required: true
  },
  adult: {
    type: String,
    required: true,
  },
  child: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  }
});

const cruisesBooking = mongoose.model("cruisesBooking", cruisesBookingSchema);

module.exports = cruisesBooking;
const mongoose = require("mongoose");

const flightBookingSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  flightName: {
    type: String,
    required: true,
  },
  flightFrom: {
    type: String,
    required: true,
  },
  flightTo: {
    type: String,
    required: true,
  },
  departingDate: {
    type: Date,
    required: true,
  },
  returningDate: {
    type: Date,
    required: true,
  },
  flightType: {
    type: String,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  paymentId: {
    type: String,
    required: true,
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

const flightBooking = mongoose.model("flightBooking", flightBookingSchema);

module.exports = flightBooking;
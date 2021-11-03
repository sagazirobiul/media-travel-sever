const mongoose = require("mongoose");

const carBookingSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  carName: {
    type: String,
    required: true,
  },
  carFrom: {
    type: String,
    required: true,
  },
  carTo: {
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
  status: {
    type: String,
    required: true,
  }
});

const CarBooking = mongoose.model("CarBooking", carBookingSchema);

module.exports = CarBooking;
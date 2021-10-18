const mongoose = require("mongoose");

const flightBookingSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  departing: {
    type: Date,
    required: true,
  },
  returning: {
    type: Date,
    required: true,
  },
  flightType: {
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

const flightBooking = mongoose.model("flightBooking", flightBookingSchema);

module.exports = flightBooking;
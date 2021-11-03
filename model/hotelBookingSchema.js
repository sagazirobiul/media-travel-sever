const mongoose = require("mongoose");

const hotelBookingSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  cityName: {
    type: String,
    required: true,
  },
  hotelName: {
    type: String,
    required: true,
  },
  roomType: {
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
  status: {
    type: String,
    required: true,
  }
});

const hotelBooking = mongoose.model("hotelBooking", hotelBookingSchema);

module.exports = hotelBooking;
const express = require('express');
const mongoose = require("mongoose");
const fileUpload = require('express-fileupload');
const cors = require('cors');
const path = require('path');
require('dotenv').config()

//make app
const app = express();
app.use(express.json());
app.use(cors())
app.use(fileUpload({
  useTempFiles: true
}))

//database connection
mongoose
    .connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@codebusters.oi0ju.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`)
    .then(()=>console.log("connection successful"))
    .catch(err => console.log(err))

//application route
app.use('/flights', require('./handleRoute/flightHandler'))
app.use('/hotels', require('./handleRoute/hotelHandler'))
app.use('/cars', require('./handleRoute/carHandler'))
app.use('/cruises', require('./handleRoute/cruiseHandler'))
app.use('/admin', require('./handleRoute/adminHandler'))
app.use('/review', require('./handleRoute/reviewHandler'))
app.use('/carBooking', require('./handleRoute/carBookingHandler'))
app.use('/flightBooking', require('./handleRoute/flightBookingHandler'))
app.use('/cruiseBooking', require('./handleRoute/cruisesBookingHandler'))
app.use('/hotelBooking', require('./handleRoute/hotelBookingHendler'))
app.use('/blog', require('./handleRoute/blogHandler'))
app.use('/comment', require('./handleRoute/commentHandler'))

//default error handler
function errorHandler(err, req, res, next) {
    if (res.headersSent) {
      return next(err);
    }
    res.status(500).json({ error: err });
  }

  const PORT = process.env.PORT || 5000
  app.listen(PORT, () =>{
      console.log('Server is running on port', PORT)
  })

const express = require('express');
const mongoose = require("mongoose");
const fileUpload = require('express-fileupload');
const cors = require('cors');
const path = require('path');
require('dotenv').config()


//import route


//make app
const app = express();
app.use(express.json());
app.use(cors())
app.use(fileUpload({
  useTempFiles: true
}))


//database connection
mongoose
    .connect("mongodb+srv://codeBuster:codebuster5@codebusters.oi0ju.mongodb.net/mediaTravel?retryWrites=true&w=majority")
    .then(()=>console.log("connection successful"))
    .catch(err => console.log(err))


//application route
app.use('/flights', require('./handleRoute/flightHandler'))
app.use('/hotels', require('./handleRoute/hotelHandler'))
app.use('/cars', require('./handleRoute/carHandler'))
app.use('/cruises', require('./handleRoute/cruiseHandler'))


//default error handler
function errorHandler(err, req, res, next) {
    if (res.headersSent) {
      return next(err);
    }
    res.status(500).json({ error: err });
  }

app.listen(5000, () => {
    console.log("app listing at port 5000");
})
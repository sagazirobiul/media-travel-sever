const express = require('express');
const mongoose = require("mongoose");
const fileUpload = require('express-fileupload');
const cors = require('cors');
const nodemailer = require("nodemailer");
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
  
app.get('/', (req, res) => {
      res.send("hello from db it's working working")
  })
  
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
app.use('/create-car-pdf', require('./handleRoute/carPdfHandler'))
app.use('/create-flight-pdf', require('./handleRoute/flightPdfHandler'))
app.use('/create-cruise-pdf', require('./handleRoute/cruisePdfHandler'))
app.use('/create-hotel-pdf', require('./handleRoute/hotelPdfHandler'))

// downloding pdf
app.get('/fetch-pdf', (req, res) => {
  res.sendFile(`${__dirname}/result.pdf`)
})
// sending email-pdf 
app.post("/send_mail", (req, res) => {
  let { email } = req.body;
  var mail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'codebuster.team@gmail.com',
      pass: 'code@buster5'
    }
  });

  var mailOptions = {
    from: 'codebuster.team@gmail.com',
    to: email,
    subject: 'Grab your book plz ;)',
    html: `<div className="email" style="
        font-family: sans-serif;
        line-height: 2;
        font-size: 20px; 
        ">
        <h2>Here is your email!</h2>
        <p>All the best, team@codeBuster</p>
        </div>
     `,
    attachments: [
      {
        filename: 'result.pdf',
        path: path.join(`${__dirname}/result.pdf`),
        contentType: 'application/pdf'
      }
    ]
  }

  mail.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
})

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

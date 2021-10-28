const express = require("express");
const hotelPdfTemplate = require('../documents/hotelPdf');
const router = express.Router()
const pdf = require('html-pdf');

router.post("/", (req, res) => {
    pdf.create(hotelPdfTemplate(req.body), {}).toFile('result.pdf', (err) => {
        if(err) {
            res.send(Promise.reject());
        }
        res.send(Promise.resolve());
    });
  });
  
  module.exports = router;
const express = require("express");
const cruisePdfTemplate = require('../documents/cruisePdf');
const router = express.Router()
const pdf = require('html-pdf');

router.post("/", (req, res) => {
    pdf.create(cruisePdfTemplate(req.body), {}).toFile('result.pdf', (err) => {
        if(err) {
            res.send(Promise.reject());
        }
  
        res.send(Promise.resolve());
    });
  });
  
  module.exports = router;
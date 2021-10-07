const express = require("express");
const Hotel = require("../model/hotelSchema")
const router = express.Router();
const cloudinary = require('cloudinary').v2;
require('dotenv').config();
const fs = require('fs');

cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET
});



router.post("/",(req, res) => {
  const file = req.files.images
    cloudinary.uploader.upload(file.tempFilePath,(err,result)=>{
      req.body.images = result.url;
      newHotel = new Hotel(req.body);
      removeTmp(file.tempFilePath)
      newHotel.save()
      .then(result=>{
        res.status(200).json({
            Hotel: result 
        })
      })
      .catch(err=>{
        console.log(err)
        res.status(500).json({
          Error: err
        })
      })
    })
    
  });

  const removeTmp = (path) =>{
    fs.unlink(path, err=>{
        if(err) throw err;
    })
}

  module.exports = router;
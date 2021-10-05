const express = require("express");
const Hotel = require("../model/hotelSchema")
const router = express.Router();
const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET
});


router.post("/",(req, res) => {
    const file = req.files.photo;
    cloudinary.uploader.upload(file.tempFilePath,(err,result)=>{
      console.log(result)
      req.body.images = result.url;
      newHotel = new Hotel(req.body);
      newHotel.save()
      .then(result=>{
        console.log(result)
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

  module.exports = router;
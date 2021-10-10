const express = require("express");
const Car = require("../model/carSchema")
const router = express.Router();
const cloudinary = require('cloudinary').v2;
require('dotenv').config();

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
      newCar = new Car(req.body);
      newCar.save()
      .then(result=>{
        console.log(result)
        res.status(200).json({
            Car: result 
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
const express = require("express");
const Cruise = require("../model/CruiseSchema")
const router = express.Router();
const cloudinary = require('cloudinary').v2;
require('dotenv').config();
const fs = require('fs');

cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET
});

router.get("/", (req, res) => {
  Cruise.find()
    .exec((err, data) => {
      if (err) {
        res.status(500).json({
          error: "There was a server side error!",
        });
      } else {
        res.status(200).json({
          result: data,
          message: "success!",
        });
      }
    })
})



router.post("/",(req, res) => {
  const file = req.files.images
    cloudinary.uploader.upload(file.tempFilePath,(err,result)=>{
      req.body.images = result.url;
      newCruise = new Cruise(req.body);
      removeTmp(file.tempFilePath)
      newCruise.save()
      .then(result=>{
        res.status(200).json({
            Cruise: result 
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
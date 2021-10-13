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

router.post("/", (req, res) => {
  const file = req.files.images
  cloudinary.uploader.upload(file.tempFilePath, (err, result) => {
    req.body.images = result.url;
    req.body.image_id = result.public_id;
    newHotel = new Hotel(req.body);
    removeTmp(file.tempFilePath)
    newHotel.save()
      .then(result => {
        res.status(200).json({
          Hotel: result
        })
      })
      .catch(err => {
        console.log(err)
        res.status(500).json({
          Error: err
        })
      })
  })

});

router.patch("/:id",(req, res) => {
  const file = req.files?.images;
  const image_id = req.body.image_id;
  cloudinary.uploader.destroy(image_id);
  if (file) {
      cloudinary.uploader.upload(file.tempFilePath,(err,result)=>{
      req.body.images = result.url;
      req.body.image_id = result.public_id;
      newImage = result.url;
      removeTmp(file.tempFilePath)
      if(result.url){
        Hotel.findOneAndUpdate({_id:req.params.id}, {$set: req.body}, (err, data)=>{
          if(err) {
              res.status(500).json({
                  error: "There was a server side error!"
              })
          } else {
              res.status(200).json({
                  message: "success!"
              })
            }  
        })   
      }
  })}
  if(req.body.images){
    Hotel.findOneAndUpdate({_id:req.params.id}, {$set: req.body}, (err, data)=>{
      if(err) {
          res.status(500).json({
              error: "There was a server side error!"
          })
      } else {
          res.status(200).json({
              message: "success!"
          })
        }  
    })
  }
});

router.get("/", (req, res) => {
  Hotel.find()
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



router.get("/:id", (req, res) => {
  Hotel.find({ _id: req.params.id }, (err, data) => {
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
router.delete("/:id", (req, res)=>{
  const image_id = req.body.image_id;
  cloudinary.uploader.destroy(image_id);
  Hotel.deleteOne({_id:req.params.id},(err)=>{
    if (err) {
      res.status(500).json({
        error: "There was a server side error!",
      });
    } else {
      res.status(200).json({
        message: "Todos was deleted successfully!",
      });
    }
  })
})

const removeTmp = (path) => {
  fs.unlink(path, err => {
    if (err) throw err;
  })
}

module.exports = router;
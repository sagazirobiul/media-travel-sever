const express = require("express");
const Flight = require("../model/flightSchema")
const mongoose = require("mongoose");
const router = express.Router();
const cloudinary = require('cloudinary').v2;
require('dotenv').config()


cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET
});

router.get("/", (req, res) => {
  Flight.find()
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

// router.get("/:id", (req, res)=>{
//     Todo.find({_id:req.params.id},(err, data)=>{
//       if (err) {
//         res.status(500).json({
//           error: "There was a server side error!",
//         });
//       } else {
//         res.status(200).json({
//           result: data,
//           message: "success!",
//         });
//       }
//     })
// })
// _id: new mongoose.Types.ObjectID,
//         flightName: req.body.flightName,
//         destination: req.body.destination,
//         price: req.body.price,
//         person: req.body.person,
//         description: req.body.description,
//         images: result.url

router.post("/", (req, res) => {
  const file = req.files.images
    cloudinary.uploader.upload(file.tempFilePath,(err,result)=>{
      req.body.images = result.url;
      newFlight = new Flight(req.body);
      newFlight.save()
      .then(result=>{
        console.log(result)
        res.status(200).json({
          flight: result 
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

// router.post("/all", async (req, res) => {
//   await Service.insertMany(req.body, (err) => {
//     if (err) {
//       res.status(500).json({
//         error: "There was a server side error!",
//       });
//     } else {
//       res.status(200).json({
//         message: "Service were inserted successfully!",
//       });
//     }
//   });
// });

// router.put("/:id", (req, res)=>{
//     Todo.updateOne({_id:req.params.id},
//       {
//         $set:{
//           status:"inactive"

//       }},
//      (err,data)=>{
//       if (err) {
//         res.status(500).json({
//           error: "There was a server side error!",
//         });
//       } else {
//         res.status(200).json({
//           result:data,
//           message: "Todos was updated successfully!",
//         });
//       }
//      }
//       )
// })

// router.delete("/:id", (req, res)=>{
//     Todo.deleteOne({_id:req.params.id},(err)=>{
//       if (err) {
//         res.status(500).json({
//           error: "There was a server side error!",
//         });
//       } else {
//         res.status(200).json({
//           message: "Todos was deleted successfully!",
//         });
//       }
//     })
// })

module.exports = router;
const express = require("express");
const cruisesBooking = require("../model/cruisesBookingSchema");
const router = express.Router();


router.post("/", (req, res) => {
    const newCruisesBooking = new cruisesBooking(req.body);
    newCruisesBooking.save()
        .then(result => {
            res.status(200).json({
                Car: result
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                Error: err
            })
        })
});
router.get("/", (req, res) => {
    cruisesBooking.find()
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

router.patch('/:id', (req, res) => {
    cruisesBooking.findOneAndUpdate({_id:req.params.id}, {$set: req.body}, (err, data)=>{
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
})


module.exports = router;
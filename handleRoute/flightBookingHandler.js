const express = require("express");
const flightBooking = require("../model/flightBookingSchema")
const router = express.Router();

router.post("/", (req, res) => {
    const newFlightBooking = new flightBooking(req.body);
    newFlightBooking.save()
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
    flightBooking.find()
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
    flightBooking.findOneAndUpdate({_id:req.params.id}, {$set: req.body}, (err, data)=>{
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
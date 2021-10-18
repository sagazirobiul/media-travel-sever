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


module.exports = router;
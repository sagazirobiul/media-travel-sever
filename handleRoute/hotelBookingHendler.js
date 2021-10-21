const express = require("express");
const hotelBooking = require("../model/hotelBookingSchema")
const router = express.Router();

router.post("/", (req, res) => {
    const newHotelBooking = new hotelBooking(req.body);
    newHotelBooking.save()
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
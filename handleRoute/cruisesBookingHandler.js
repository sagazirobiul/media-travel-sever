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

module.exports = router;
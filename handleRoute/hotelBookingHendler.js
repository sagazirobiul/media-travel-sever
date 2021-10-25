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
router.get("/", (req, res) => {
    hotelBooking.find()
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

module.exports = router;
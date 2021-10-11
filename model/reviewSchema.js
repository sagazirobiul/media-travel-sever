const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    }
})

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
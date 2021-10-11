const express = require("express");
const router = express.Router();
const Review = require("../model/reviewSchema")

// get reviews
router.get('/', (req, res) => {
    Review.find()
    .exec((err, data) => {
        if(err) {
            res.status(500).json({
                error: "There was a server side error!"
            })
        } else {
            res.status(200).json({
                result: data,
                message: "success!"
            })
        }
    })
})


// get review for specifc user
router.get('/:id', (req, res) => {
    Review.find({email: req.params.id}, (err, data) => {
        if(err) {
            res.status(500).json({
                error: "There was a server side error!"
            })
        } else {
            res.status(200).json({
                result: data,
                message: "success!"
            })
        } 
    })
})


// post review
router.post('/', async (req, res) => {
    const newReview = new Review(req.body);
    await newReview.save((err) => {
        if(err){
            res.status(500).json({
                error: "There was a server side error!"
            })
        } else {
            res.status(200).json({
                message: "Review was inserted sucessfully!"
            })
        }
    });
})


// put review
router.patch('/:id', (req, res) => {
        Review.findOneAndUpdate({_id:req.params.id}, {$set: req.body}, (err) => {
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


// delete review
router.delete('/:id', async (req, res) => {
    try {
        await Review.findByIdAndDelete(req.params.id)
        res.json({msg: "Deleted a Product"})
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }

})


module.exports = router;
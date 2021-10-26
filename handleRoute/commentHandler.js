const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Comment = require("../model/commentSchema")

// get comments
router.get('/', (req, res) => {
    Comment.find()
    .exec((err, data) => {
        if(err) {
            console.log(err)
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


// get comments
router.get('/:id', (req, res) => {
    Comment.find({email: req.params.id}, (err, data) => {
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


// post comments
router.post('/', async (req, res) => {
    const newComment = new Comment(req.body);
    // console.log(newComment)
    await newComment.save((err) => {
        if(err){
            console.log(err)
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


// put 
router.patch('/:id', (req, res) => {
    Comment.findOneAndUpdate({_id:req.params.id}, {$set: req.body}, (err) => {
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


// delete
router.delete('/:id', async (req, res) => {
    try {
        await Comment.findByIdAndDelete(req.params.id)
        res.json({msg: "Deleted a Product"})
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }

})


module.exports = router;
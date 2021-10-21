const express = require("express");
const Admin = require("../model/adminSchema");
const router = express.Router();

router.post('/', async(req, res) => {
    admin = new Admin(req.body);
    await admin.save()
    .then(result=>{
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

router.get('/:id', (req, res) => {
  Admin.find({email: req.params.id}, (err, data) => {
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

module.exports = router;
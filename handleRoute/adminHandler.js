const express = require("express");
const Admin = require("../model/adminSchema");
const { route } = require("./flightHandler");
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

module.exports = router;
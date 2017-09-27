var express = require("express");
var router = express.Router();

router.use(function(req,res,next){
    console.log("user api calling",req.originalUrl)
    next();
})

router.get('/users',function(req,res){
    res.send("welcome to home page of users")
})

router.get('/users/:id',function(req,res){
    res.json({ "name": req.params.id });
})

module.exports = router;

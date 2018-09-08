var express = require('express');
var router = express.Router();
var db = require("../models");
var bodyparser = require("body-parser");



router.post('/',function(req,res){
    res.bodyparser('thats the post route');
})

  
module.exports = router;
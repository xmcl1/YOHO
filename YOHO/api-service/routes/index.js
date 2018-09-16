var express = require('express');
var router = express.Router();
var data2 = require("../data/cartsInfo");
var data1 = require("../data/sale");
var data = require("../data/indexdata");
var date = require("../data/show");
var date1 = require("../data/guang");
var json = require("../data/index1")

router.get("/api/index",(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Origin,Content-Type,Accept");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.json(data)
})
router.get("/api/cart",(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Origin,Content-Type,Accept");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.json(data2)
})

router.get("/api/sale",(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Origin,Content-Type,Accept");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.json(data1)
})
router.get("/api/show",(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Origin,Content-Type,Accept");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.json(date);

})

router.get("/api/guang",(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Origin,Content-Type,Accept");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");

    res.json(date1)
})


router.get("/api/json", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Origin,Content-Type,Accept");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  
    res.json(json)
})
module.exports = router;
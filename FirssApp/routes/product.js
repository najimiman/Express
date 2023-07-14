var express=require("express");
var router=express.Router();

//products
router.get('/',(req,res)=>{
    res.send("get request for products");
});

//products-details
router.get('/get-product-details',(req,res)=>{
    res.send("get detils for products");
});

module.exports=router;

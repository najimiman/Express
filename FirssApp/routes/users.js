var express=require("express");
var router=express.Router();

//products
// router.get('/',(req,res)=>{
//     res.send("get request for users");
// });
router.use('/',(req,res,next)=>{
    req.headers["content-type"]='application/json';
    console.log("API CALL RECEIVED");
    next();
});

router.get('/',(req,res,next)=>{
    res.send("get request for users");
    next();
});

router.use('/',(req,res)=>{
    console.log("API CALL ended");
    
});


//products-details
router.get('/get-user-details',(req,res)=>{
    res.send("get detils for user");
});
router.get('/get-user-details/:id',(req,res)=>{
    res.send("get detils for user  "+req.params.id);
});

router.get('/search/:key([0-9]{4})',(req,res)=>{
    res.send("data captured is"+req.params.key);
})

router.get('/search-by-name/:key([a-zA-Z]{4})',(req,res)=>{
    res.send("data captured is"+req.params.key);
})
router.get('*',(req,res)=>{
    var resobj={
        statusCode:404,
        statusMsg:"NOT FOUND"
    }
    // res.send("NOT FOUND");
    res.send(resobj);
})


module.exports=router;

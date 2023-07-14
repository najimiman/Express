// var express=require("express");
// var product=require('./routes/product')

// var app=express();

// app.user('/product',product);
// app.get("/getUsers",(req,res)=>{
//     var user={
//         id:'1',
//         name:'user1',
//         email:'user1@gmail.com'
//     };
//     // res.send("hello user");
//     res.send(user);
// });
// app.listen(4000);

var express = require("express");
// var product = require("./routes/product");
const product = require('./routes/product');
const user = require('./routes/users');

var app = express();

app.use("/product", product);
app.use("/users", user);
app.get("/getUsers", (req, res) => {
    var user = {
        id: "1",
        name: "user1",
        email: "user1@gmail.com"
    };
    res.send(user);
});

app.listen(4000, () => {
    console.log("Server started on port 4000");
});
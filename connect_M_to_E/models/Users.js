const mongoose=require("mongoose");
const Usershema=new mongoose.Schema({
    // name:{
    //     type: String,
    // },
    // email:{
    //     type: String,
    // },
    name:String,
    email:String
});
//{ name: String, email: String }
// const UserModel=mongoose.model("user",Usershema)
var UserM = mongoose.model("users",Usershema);
module.exports=UserM
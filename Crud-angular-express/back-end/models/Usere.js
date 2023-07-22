var mongoose=require('mongoose')
const Usershema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
})
var UserM = mongoose.model("users",Usershema);
module.exports=UserM;
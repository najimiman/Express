const mongoose=require('mongoose');
const TestM=mongoose.model('test1',{name:String,email:String});
module.exports=TestM;
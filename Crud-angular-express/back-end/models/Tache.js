var mongoose=require('mongoose');
const Tacheshema=new mongoose.Schema({
  name:String,
  datetime:Date
});

var TacheM = mongoose.model("taches",Tacheshema);
module.exports=TacheM;
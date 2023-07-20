var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');
const TacheM = require('../models/Tache');

//connection
mongoose.connect('mongodb://127.0.0.1:27017/store',{
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=>{
  console.log("connected")
})
.catch((err)=>{
  console.log(err);
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//get data tache
// router.get('/tache',async(req, res, next) => {
//   const taches=await TacheM.find();
//   res.json(taches);
// });

router.get('/tache', async (req, res, next) => {
  const taches = await TacheM.find();
  res.json(taches);
});

// add tache
router.post('/addtache',async(req,res,next)=>{
  const newtache=new TacheM({
    name:req.body.name,
    datetime:req.body.datetime,
  })
  newtache.save().then((newT)=>{
    res.send({status:200,message:'task add sucess',taskObj:newT})
  })
  .catch((err)=>{
    res.send(err)

  })
})

//update tache
router.put('/updatetache',async(req,res,next)=>{
  const id=req.query.id;
  const name=req.query.name;
  const datetime=req.query.datetime;
  TacheM.findByIdAndUpdate(id,{name:name,datetime:datetime}).then((updateT)=>{
    res.send({status:200,message:'task update sucess',taskObj:updateT})
  })
  .catch((err)=>{
    res.send(err)

  })
})

//delete tache

router.delete('/deletetache',async(req,res,next)=>{
  const id=req.query.id;
  TacheM.findByIdAndDelete(id).then((deleteT)=>{
    res.send({status:200,message:'task delete sucess',taskObj:deleteT})
  })
  .catch((err)=>{
    res.send(err)

  })
})

module.exports = router;

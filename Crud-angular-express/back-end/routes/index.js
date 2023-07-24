var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');
const TacheM = require('../models/Tache');
const UserM = require('../models/Usere');
const bcrypt=require('bcrypt')
var jwt = require('jsonwebtoken');


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


router.get('/tache', async (req, res, next) => {
  const taches = await TacheM.find();
  res.json(taches);
});

//get task by id
router.get('/tachebyid', async (req, res, next) => {
  const id=req.query.id;
  const taches = await TacheM.findById(id);
  res.json(taches);
});

router.get('/search', async function(req, res) {
  const query = req.query.q;
  try {
    const data = await TacheM.find({ $or: [{ name: { $regex: query, $options: 'i' } }, { datetime: { $regex: query, $options: 'i' } }] });
    console.log(data);
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
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

router.get('/uers', async (req, res, next) => {
  const users = await UserM.find();
  res.json(users);
});

//registre
router.post('/register',async(req,res)=>{
  const {name,email,password}=req.body
  const admin=await UserM.findOne({email})
  // res.json({admin})
  // this row if admin true res message 
  if(admin){
    res.json({message:"user already existe!"})
  }
  else{
    const hashedpassword=bcrypt.hashSync(password,10)
    const newuser=new UserM({
      name:name,
      email:email,
      password:hashedpassword
    });
    await newuser.save();
    return res.json({message:"user created succefully!"})
  }
   
})

//login
router.post('/login',async(req,res)=>{
  const {name,email,password}=req.body
  const admin=await UserM.findOne({email})
  // res.json({admin})
  // this row if admin false  
  if(!admin){
    res.json({message:"user  not existe!"})
  } 
  else{
    const ispasswordvalid=await bcrypt.compare(password, admin.password)
  if(!ispasswordvalid){
    res.json({message:"name or password not correcte !"}) 
  }
  else{
    var token = jwt.sign({ id: admin._id }, 'najim');
    return res.json({token,adminID:admin._id})

  }
  }
  
})
 
 
module.exports = router;

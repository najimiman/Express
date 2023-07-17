const express=require('express');
const app=express()
const mongoose=require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/store", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("success connected");
})
.catch((err) => {
  console.log(err);
});



const UserM = require('./models/Users');
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const TestM = require('./models/Test1');

app.get("/user",async(req,res)=>{
    const users=await UserM.find();
    res.json(users);
    console.log(users);
})

app.get("/test",async(req,res)=>{
  const testM=await TestM.find();
  res.json(testM);
})

app.post('/add',function(req,res){
  console.log(req.body);
  let user=new UserM({
    name:req.body.name,
    email:req.body.email
  });
  user.save().then((newuser)=>{
    res.send({status:200,message:'user add sucess',userObj:newuser})
  })
    .catch((err)=>{
      res.send(err)

    })
});
//search by name
// app.get('/searchbyname',function(req,res,next){
//   const nameQuery=req.query.name;
//   UserM.find({ name: nameQuery })
//   .then(response => {
//     res.send({ status: 200, users: response });
//   })
//   .catch(err => {
//     res.sendStatus(500);
//     console.error(err);
//   });
// });

//search by ud
app.get('/searchbyid',function(req,res,next){
  const idQuery=req.query.id;
  UserM.findById(idQuery)
  .then(response => {
    res.send({ status: 200, users: response });
  })
  .catch(err => {
    res.sendStatus(500);
    console.error(err);
  });
});

//update
app.put('/update',function(req,res,next){
  const id=req.query.id;
  const email  =req.query.email;
 //update by name
 
  // UserM.updateMany({name:'user2'},{email:email})
  // .then(response => {
  //   res.send({ status: 200, users: response });
  // })
  // .catch(err => {
  //   res.sendStatus(500);
  //   console.error(err);
  // });

  //update by id
  UserM.findByIdAndUpdate(id,{email:email})
  .then(response => {
    res.send({ status: 200, users: response });
  })
  .catch(err => {
    res.sendStatus(500);
    console.error(err);
  });
});

//delete

app.delete('/delete',function(req,res,next){
  const id=req.query.id;
  // const email  =req.query.email;
  UserM.findByIdAndDelete(id)
  .then(response => {
    res.send({ status: 200, users: response });
  })
  .catch(err => {
    res.sendStatus(500);
    console.error(err);
  });

});


app.listen(3000,()=>{
    console.log('Server started on port 3000');
});
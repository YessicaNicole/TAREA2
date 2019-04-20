var express = require('express');
//var router = express.Router();
const user = require('../database/user');
const USER = user.model;
const USERSCHEMA = user.schema;
var valid=require("../utils/valid");
var router=express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/user',async(req,res)=>{
  var params = req.body;
  params["registerDate"]=new Date();
  params["updateDate"]=new Date();
  if (!valid.checkParams(USERSCHEMA,params)){
    res.status(300).json({
      msn:"los parametros estan incorrectos"
    });
    return;
  }
  var user = new USER(params);
  var result = await user.save();
    res.status(200).json(result)
});



 router.put('/user',async(req,res)=>{
   var params = req.body;
   var id=req.query.id;
   if(id==null){
     res.status(300).json({
       msn:"falta id"
     });
     return;
   }
   params["updateDate"]=new Date();
   if (!valid.checkParams(USERSCHEMA,params)){
     res.status(300).json({
       msn:"los parametros estan incorrectos"
     });
     return;
   }
   var result= await USER.findOneAndUpdate({_id: id},params);
     res.status(200).json(result)
 });

 router.patch('/user',async(req,res)=>{
   var params = req.body;
   var id=req.query.id;
   if(id==null){
     res.status(300).json({
       msn:"falta id"
     });
     return;
   }

   var result= await USER.findOneAndUpdate({_id: id},params);
     res.status(200).json(result)
 });

 router.delete('/user',async(req, res)=>{
   var id = await req.query.id;
   if (id==null) {
     res.status(300).json({
       msn:"falta id"
     });
     return;
   }
   var result=await USER.remove({_id: id});
   res.status(200).json(result);
 });

router.get('/user',async(req, res)=>{
  var list = await USER.find({});
  res.status(200).json(list);
});

module.exports = router;

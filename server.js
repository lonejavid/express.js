const express=require('express');
const http=require('http');
const app=express();
app.use((req,res,next)=>{
  console.log("this is midd 1");
  next();
})
app.use((req,res,next)=>{
  console.log("this is midd 2");
})


app.listen(4000,()=>{console.log("started...")})
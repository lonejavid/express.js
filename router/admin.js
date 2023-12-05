const express=require('express');
const router=express.Router();
router.get('/admin',(req,res)=>{
   
    res.send('<html><head></head><body><form action="/pro" method="POST"><input type="text" name="title"><br/><input type="text" name="price"><br/><button type="submit">Add product</button></form></body></html>');
})
router.post('/pro',(req,res)=>{
    console.log(req.body)
    res.redirect('/')

})
module.exports=router;
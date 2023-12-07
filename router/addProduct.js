const express=require('express');
const path=require('path')
const router=express.Router();
router.get('/add-product',(req,res)=>{
   res.sendFile(path.join(__dirname,'../','views','addproduct.html'))
})
router.post('/pro',(req,res)=>{
    console.log(req.body)
    res.redirect('/')

})
module.exports=router;
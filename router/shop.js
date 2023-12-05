const express=require('express');
const router=express.Router();
router.get('/',(req,res)=>{
    res.send('<h1> welcome to our shop...');
})
module.exports=router;
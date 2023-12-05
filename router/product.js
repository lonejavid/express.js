// const express=require('express');
// const router=express.Router();
// router.use('',(req,res)=>{
//     res.send('<h4> product page');
// })
// module.exports=router;

const express=require('express');
const router=express.Router();
router.get('/',(req,res)=>{
    res.send('<h1> welcome to our product page...');

})
module.exports=router;
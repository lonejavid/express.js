const express=require('express');
const fs=require('fs')
const router= express.Router();


router.get('/',(req,res)=>{
    res.send(`<form onsubmit="localStorage.setItem('userName',document.getElementById('userName').value)"
     action="/user-added">
    <input type="text" id="userName">
    <button type="submit">Login User</button>`);

})



router.get('/user-added',(req,res)=>{
    
    res.send(`<form onsubmit="document.getElementById('userName').value=localStorage.getItem('userName')" action='/' method="POST">
    <input type="text" name="message" recquired>
    <input type='hidden' id="userName" name="userName">
    <button type="submit">send</button></form>`)
   
})

router.post('/',(req,res)=>{
    console.log(req.body);
    const {message,userName}=req.body;
    fs.appendFileSync('chat.text',`${userName}: ${message}`);
    const chat=fs.readFileSync('chat.text','utf-8')
   res.send(`
   <p>${chat}</p>
   <form submit="document.getElementById('userName').value=localStorage.getItem('userName')" action='/' method="POST">
   <input type="text" name="message" >
   <input name="userName" id="userName" type="hidden">
   <button type="submit">send</button></form>

   `);
   
    
})

// router.post('/message',(req,res)=>{
//     console.log(req.body);
//     res.redirect('/user-added')
// })

module.exports=router;
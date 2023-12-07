const express=require('express');
const path=require('path')
const bodyParser=require('body-parser');
//importing the login page route
const adProduct=require('./router/addProduct');


const shoupRouter=require('./router/shop');

const app=express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(adProduct);



app.use(shoupRouter);
app.use((req,res)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})

app.listen(3000,()=>{
    console.log("server strated...")
})
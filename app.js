const express=require('express');
const bodyParser=require('body-parser');
//importing the login page route
const adminRputer=require('./router/admin');

const productRouter=require('./router/product');
const shoupRouter=require('./router/shop');

const app=express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(adminRputer);


app.use('/product',productRouter);
app.use('/',shoupRouter);


app.listen(3000,()=>{
    console.log("server strated...")
})
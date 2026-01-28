const express=require('express');
const app=express();
const port=3000;
app.get('/',(req,res)=>{
    res.send("Hello Home page Aagaye Bhai");
})
app.get('/user',(req,res)=>{
    res.json({name:"Rahul",role:"Student"})
})
app.get('/about',(req,res)=>{
    res.send("Hello About Page");
})
app.get('/contact',(req,res)=>{
    res.send("Hello Contact Page!");
})
app.get('/profile',(req,res)=>{
    res.send("Hello Profile Page!");

})
app.listen(port,()=>{
    console.log("the Express Server running ");
})
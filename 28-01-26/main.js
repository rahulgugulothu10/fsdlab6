const express=require("express");
const app=express();
const port=3000;
app.use(express.static("public"));
app.get("/",(req,res)=>{
    console.log("Get Request Aagaya Bhai");
    res.send("Hello World2!");
})
app.put("/",(req,res)=>{
    console.log("Post Request Aagaya Bhai");
    res.send("Hello Post!");
})
app.listen(port,()=>{
    console.log(`Example of running on port http:${port}`);
})
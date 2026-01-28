const fs=require("fs");
fs.writeFileSync("simple.txt","Hi Hello This is Cvr college of Engineering Guys and Simple text File Bhai");
fs.unlink("simple.txt",(err)=>{
    if(err) throw err;
    console.log("file deleted successfully!");
})
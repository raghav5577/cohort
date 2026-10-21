const express = require("express");

const app = express();
var reqCount = 0;
app.use((req,res,next)=>{
    reqCount = reqCount+1;
    next();
})
app.get("/user", (req,res)=>{
    res.status(200).json({
        msg:"Created dummy user"
    })
})

app.get("/req", (req,res)=>{
    res.json({
        reqCount
    })
})
app.listen(3000, ()=>{
    console.log("Server is running on PORT: http://localhost:3000");
})
const express = require("express");
const app = express();


let reqCount = 0;
function reqIncr(req,res,next){
    reqCount = reqCount+1;
    console.log(`Total number of requests = ${reqCount}`);
    next();
}

app.get("/sum",reqIncr,(req,res)=>{
    const a = parseFloat(req.query.a)
    const b = parseFloat(req.query.b)
    res.json({
        ans: a+b
    })
})
app.get("/subtract",reqIncr,(req,res)=>{
    const a = parseFloat(req.query.a)
    const b = parseFloat(req.query.b)
    res.json({
        ans: a-b
    })
})

app.listen(3000,()=>{
    console.log("Server is running at http://localhost:3000");
})
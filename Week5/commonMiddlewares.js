const express = require('express');
const app = express();

app.use(express.json());
//express.json() calls a function itself that parses the json ( body-parser )

app.post("/sum",(req,res)=>{
    const a = parseFloat(req.body.a);
    const b = parseFloat(req.body.b);
    res.json({
        ans:a+b
    })
})

app.listen(3000,()=>{
    console.log("Server is running at http://localhost:3000");
})
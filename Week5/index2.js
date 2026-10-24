const express = require('express');
const app = express();


app.get("/sum/:a/:b",(req,res)=>{
    const a = parseFloat(req.params.a)
    const b = parseFloat(req.params.b)
    res.json({
        ans: a+b
    })
})
app.get("/sum/:a/:b",(req,res)=>{
    const a = parseFloat(req.params.a)
    const b = parseFloat(req.params.b)
    res.json({
        ans: a+b
    })
})
app.get("/subtract/:a/:b",(req,res)=>{
    const a = parseFloat(req.params.a)
    const b = parseFloat(req.params.b)
    res.json({
        ans: a-b
    })
})
app.get("/multiply/:a/:b",(req,res)=>{
    const a = parseFloat(req.params.a)
    const b = parseFloat(req.params.b)
    res.json({
        ans: a*b
    })
})
app.get("/divide/:a/:b",(req,res)=>{
    const a = parseFloat(req.params.a)
    const b = parseFloat(req.params.b)
    res.json({
        ans: a/b
    })
})

app.listen(3000,()=>{
    console.log("Server is running at http://localhost:3000");
})

// for dynamic route handling using :=> /user/:id => catch using req.params.id
// for query params handling using ?:>  /user?id=1 => catch using req.query.id
const express = require('express');
const app = express();

app.get("/sum", (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);
    res.json({
        ans: a + b
    })
})
app.get("/subtract", (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);
    res.json({
        ans: a - b
    })
})
app.get("/multiply", (req, res) => {

    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);
    res.json({
        ans: a * b
    })
})

app.get("/divide", (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);
    res.json({
        ans: a / b
    })
})

app.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
})
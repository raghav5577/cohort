const express = require('express');
const app = express();

function logDetails(req, res, next) {
    console.log(`Method: ${req.method}`)
    console.log(`url: ${req.url}`)
    console.log(`Date: ${new Date()}`);
    next();
}

app.get("/sum", logDetails, (req, res) => {
    const a = parseFloat(req.query.a)
    const b = parseFloat(req.query.b)
    res.json({
        ans: a + b
    })
})
app.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
})

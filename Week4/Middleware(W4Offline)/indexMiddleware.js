const express = require("express");
const app = express();

function isOldMiddleware(req, res, next) {
    const age = req.query.age;
    if (age >= 14) {
        next();
    }
    else {
        res.json({
            msg: "You are too young for this ride..."
        })
    }

}

app.get("/ride1", isOldMiddleware, (req, res) => {
    res.json({
        msg: "You have successfully ridden ride 1..."
    })
})
app.get("/ride2", isOldMiddleware, (req, res) => {
    res.json({
        msg: "You have successfully ridden ride 2..."
    })
})

app.listen(3000, () => {
    console.log("Server is running on PORT: http://localhost:3000");
})
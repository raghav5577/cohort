const express = require('express');
const app = express();


function isOldEnough(age) {
    if (age >= 14) {
        return true;
    }
    else{
        return false;
    }
}


app.get("/ride1", (req, res) => {
    if (isOldEnough(req.query.age)) {
        res.json({
            msg: "You have successfully ridden ride 1..."
        })
    }
    else {
        res.json({
            msg: "You are too small for the ride1..."
        })
    }
})

app.listen(3000, () => {
    console.log("Server is running on PORT: http://localhost:3000");
})
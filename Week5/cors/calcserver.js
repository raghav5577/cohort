const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

// or app.use(cors({
//      origin:"http://localhost:5000"})) => for specific origins



// app.get("/",(req,res=>{
//     res.sendFile(__dirname + "./public/index.html");
// })) => if backend and frontedn are hosted on same servers like in next js




app.post("/sum", (req, res) => {
    const a = parseFloat(req.body.a);
    const b = parseFloat(req.body.b);
    res.json({
        ans: a + b
    })
})

app.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
})
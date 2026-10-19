const express = require("express");
const app = express();
function sum(n){
    let ans =0;
    for(let i=1;i<=n;i++){
        ans =ans+i;
    }
    return ans;
}
app.get("/",(req,res)=>{
    const n = req.query.n;
    const ans = sum(n);
    res.send("hi, your ans is "+ans);
})

app.listen(3000, ()=>{
    console.log("server started on http://localhost:3000");
})

const express = require("express");
const app = express();

var users = [
    {
    name:"John",
    kidneys: [{
        healthy:false
    }]
},
{
    name:"Doe",
    kidneys:[{
        healthy:true
    }]
}
]
app.use(express.json());

app.get("/",(req,res)=>{
    const johnKidneys = users[0].kidneys;
    const numofKidneys = johnKidneys.length;
    let numofHealthyKidneys = 0;
    for(let i=0; i<johnKidneys.length; i++){
        if(johnKidneys[i].healthy){
            numofHealthyKidneys = numofHealthyKidneys +1;
        }
    }
    const numofUnhealthyKidneys = numofKidneys - numofHealthyKidneys;

    res.json({
        numofKidneys,
        numofHealthyKidneys,
        numofUnhealthyKidneys
    })
});
app.post("/",(req,res)=>{
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg:"Done!"
    })
})
app.put("/",(req,res)=>{
    for(let i=0; i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({});
})

app.delete("/", (req,res)=>{
    if(isThereAtLeastOneHealthyKidney()){
        const newKidneys = [];
        for(let i=0; i<users[0].kidneys.length; i++){
            if(users[0].kidneys[i].healthy){
                newKidneys.push(users[0].kidneys[i]);
            }
        }

        users[0].kidneys = newKidneys;
        res.json({msg:"done"})
    }
    else{
        res.status(411).json({msg:"You have no defected kidneys"})
    }
});
function isThereAtLeastOneHealthyKidney(){
    let atLeastOneUnhealthyKidney =false;
    for(let i=0; i<users[0].kidneys.length; i++){
        if(!users[0].kidneys[i].healthy){
            atLeastOneUnhealthyKidney = true;
        }
    }
    return atLeastOneUnhealthyKidney;
}

app.listen(3000,()=>{
    console.log("server started on http;//localhost:3000");
});
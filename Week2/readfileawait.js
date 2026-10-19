const fs = require('fs');

function readFileAsync(){
    return new Promise(resolve=>{
        fs.readFile('testfilea.txt','utf-8',function(err,data){
            if(err){
                console.log("Error occured in reading file");
            }
            else{
                resolve(data);
            }
        })
    })
}

readFileAsync().then(function(x){
    console.log("File has been read");
}).catch(function(e){
    console.log(e);
})


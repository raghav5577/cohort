const fs = require('fs');

function myFunction(resolve){
    fs.readFile("a.txt","utf-8",(err,data)=>{
        resolve(data);
    });
}

function Read(){
    return new Promise(myFunction);
}

const p = Read();

function callBack(contents){
    console.log(contents);
}

p.then(callBack);

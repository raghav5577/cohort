const { time } = require("console");

function settimeoutpromisified(time){
    return new Promise(function(resolve){
        setTimeout(resolve,time);
    });
}

function callback(){
    console.log("Time has passed..");
}
settimeoutpromisified(3000).then(callback);
function setTimeoutpromisified(duration){
    return new Promise(resolve=>{
        setTimeout(resolve,duration);
    });

}
setTimeoutpromisified(1000).then(()=>{
    console.log("1 sec has passed");
})
function doAsyncOp(resolve){
    setTimeout(resolve,3000);
}

function callback(){
    console.log("3 seconds passed");
}

const p = new Promise(doAsyncOp).then(callback);

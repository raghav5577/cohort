// now the async await syntax 
// it is a syntactic sugar over promises
// it makes asynchronous code look and behave a little more like synchronous code syntatically but perform like asynchronous
// it is built on top of promises

function setTimeoutPromisified(duration){
    return new Promise(resolve=>{
        setTimeout(resolve,duration)
    });
}

async function solve(){
    await setTimeoutPromisified(1000);
    console.log("hi");
    await setTimeoutPromisified(3000);
    console.log("hello")
    console.log("hi");
    await setTimeoutPromisified(5000);
    console.log("hello there")
}




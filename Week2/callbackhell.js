// setTimeout(()=>{
//     console.log("hi");
//     setTimeout(()=>{
//         console.log("hello");
//         setTimeout(()=>{
//             console.log("hello there");
//         },5000);
//     },3000);
// },1000);

//this solution gives us a callback hell 


//solution to callback hell 


function setTimeoutPromisified(duration){
    return new Promise(resolve=>{
        setTimeout(resolve,duration);
    });
}

// setTimeoutPromisified(1000).then(()=>{
//     console.log("hi");
//     setTimeoutPromisified(3000).then(()=>{
//         console.log("hello");
//         setTimeoutPromisified(5000).then(()=>{
//             console.log("hello there");
//         })
//     })
// })

//this solution also has ugly indentation as is very messy 



//so we use Promise chaining 
//we are returning the promise first then 


setTimeoutPromisified(1000).then(function(){
    console.log('hi');
    return setTimeoutPromisified(3000);
}).then(function(){
    console.log("hello");
    return setTimeoutPromisified(5000);
}).then(function(){
    console.log("hello there");
})
//this is much better than callback hell and also better indentation
//promise chaining

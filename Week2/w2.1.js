// function sum(n) {
// 	let ans = 0;
// 	for (let i = 1; i <= n; i++) {
// 		ans = ans + i
// 	}
// 	return ans;
// }

// const ans1 = sum(100);
// console.log(ans1);
// const ans2 = sum(1000);
// console.log(ans2);
// const ans3 = sum(10000);
// console.log(ans3);



// const fs = require('fs');

// const contents1 = fs.readFileSync('a.txt','utf8');
// console.log(contents1);
// const contents2 = fs.readFileSync('b.txt','utf8');
// console.log(contents2);


// function sum(a,b){
//     return a+b;
// }
// function subtract(a,b){
//     return a-b;
// }
// function multiply(a,b){
//     return a*b;
// }
// function divide(a,b){
//     return a/b;
// }
// function doOperation(a,b,op){
//     return op(a,b)
// }
// console.log(doOperation(1,2,divide))


// const fs = require('fs');
// function callBack(err,data){
//     if (err) {
//         console.error('Error reading file:', err);
//         return;
//     }
//     else{
//         return console.log(data);
//     }
// }
// fs.readFile('a.txt','utf8', callBack)// asynchrnous  function readfile(filename, encoding, callback)

// fs.readFile('b.txt','utf8', callBack);//asynchronous (whichever task is done first send a callback first )

// console.log("all Done!!");


function timeout(){
    console.log("This is timeout function");
}
console.log("HI THERE!");
setTimeout(timeout, 1000);  //This is an asynchronous function that will execute the desired value after the timeout period (mentioned in ms)

console.log("After timeout function is called by setTimeout");
let c=0
for(let i=0; i<1000000000; i++){
    c=c+=1;
}
console.log(c);
let=0
for(let i=0; i<10000000000; i++){
    d=d+=1;
}
console.log(d);
console.log("After heavy loop is executed");
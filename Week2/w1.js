function solve(arr) {
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].age >= 18 && arr[i].gender == "male") {
      arr2.push(arr[i]);
    }
  }
  return arr2;
}
const users = [
  { name: "Raghav", age: 20, gender: "male" },
  { name: "Vaibhav", age: 11, gender: "male" },
  { name: "Rashmi", age: 48, gender: "female" },
  { name: "Basant", age: 52, gender: "male" },
];
console.log(solve(users));


function sum(n){
  let s = 0;
  for(let i=1; i<=n; i++){
    s+=i;
  }
  return s;
}
console.log(sum(10));



function greet(name1,age){
  return "Namaste "+name1+ "!"+ " You are "+age;
}
console.log(greet("Raghav", 20));



function sum(a,b){
    return parseInt(a)+parseInt(b);  // parseInt converts string to integer
}
console.log(sum("2",3)); // if we pass arguments as string it will concatenate them 
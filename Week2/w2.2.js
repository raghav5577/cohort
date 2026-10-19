// class Rectangle{
//     constructor(width,height, colour){
//         this.width = width;
//         this.height=height;
//         this.colour=colour;
//     }
//     area(){
//         const area =  this.width*this.height;
//         return area;
//     }
//     perimeter(){
//         const perimeter = 2*(this.width+this.height);
//         return perimeter;
//     }
// }
// const rect = new Rectangle(2,3,"blue");
// const area = rect.area();
// const perimeter = rect.perimeter();
// console.log("Area of rectangle is: " + area);
// console.log("Perimeter of rectangle is: " + perimeter);



// const newD = new Date();
// console.log(newD);


// const map = new Map();
// map.set("name","Raghav");
// map.set("age",20);
// map.set("isStudent",true);

// console.log(map.get("name")); // "Raghav"
// console.log(map.get("age")); // 20
// console.log(map.get("isStudent")); // true


// this program avoids Callback Hell (but promisified  version is better)





// function s3D(){
//     console.log("hello there");
// }
// function s2D(){
//     console.log("hello");
//     setTimeout(s3D, 5000);
// }
// function s1D(){
//     console.log("hi");
//     setTimeout(s2D, 3000);
// }
// setTimeout(s1D, 1000);


function random(resolve){
    setTimeout(resolve,3000);
}

let p = new Promise(random); //promise eventually returns something

function callback(){
    console.log("Promise completed successfully");
}
p.then(callback);
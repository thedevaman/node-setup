// console.log("a1");
// let a = 10;
// let b = 0;
// setTimeout(()=>{
// // console.log("a2");
// b = 100
// console.log(a+b)
// },2000)

// console.log(a+b);

 const fs = require('fs');
// fs.readFile("text/rahul.txt","utf-8", (error,data)=>{
//     if(error)
//     {
//        return false
//     }
//     console.log(data);
// })

const data = fs.readFileSync('text/aman.txt',"utf-8")
console.log(data)

console.log("end script")
//                                 Functions
// block of code that performs a spesific task, can be invocked whenever needed

//////

// ---> function declaration

// --> function demo(){
//     console.log('I am learning javascripy');
// }

// --> function call
// demo();
// demo();



// --> function demo (message){  // parameters
//    console.log(message);
// }
// demo("I Love Javascript") // argument



// --> function demo (message,explain){  // parameters
//    console.log(message + explain);
// }
// demo("I Love Javascript"," because this is my favorat language") // argument



// --> function -> sum of two numbers
// function twoSum (a,b){
//     console.log(a + b);
// }
// twoSum(5,9)



// --> return 
// function sum(a,b){
//     s = a +  b;
//     return s;
// }
// let val = sum(5,5);
// console.log(val);

//////

//////

// ---> arrow function  // Modern javascript 

// const sum = (a,b) => {
//     console.log(a + b);
// }

// sum(7 , 3)


// arrow with return
// let mul = (a,b) => {
//     return a * b;
// }
// console.log(mul(2,2));

//////


// practice question

// function countVOl (str){
//     let count = 0;
//     for(let char of str){
//         if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"
//         ){
//          count++;
//     }
// }
//  return count;
// }
// console.log(countVOl("hello world"));


// using arrow function

// const countvol = (str) => {
//     let count = 0;
//     for (let char of str){
//         if(char === "a" || char === "e" || char === "i" || char === "i" || char === "o" || char === "u") {
//             count++
//         }
//     }
//     return count
// }

// console.log(countvol("hello world"));

//////

//////

// ---> for each loop & callback function

// let arr = ["Abdullah","Tayyab","Adrees"];
// let arr = [27,84,39,83,33];
// arr.forEach(function printVal (val){
//     console.log(val);
// })


// let arr = ["Abdullah","Tayyab","Adrees"];
// let arr = [27,84,39,83,33];

// arr.forEach((val) => {
//     console.log(val);
// })


// let arr = ["Abdullah","Tayyab","Adrees"];
// // let arr = [27,84,39,83,33];

// arr.forEach((val,index) => {
//     console.log(val , index);
// })


// let arr = ["Abdullah","Tayyab","Adrees"];
// // let arr = [27,84,39,83,33];

// arr.forEach((val,index,arr) => {
//     console.log(val , index , arr);
// })

//////


//////

















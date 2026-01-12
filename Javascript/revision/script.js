//                  if else statement



// let candidateAge = 18;
// let isCitizen = true ;
// let isRegistered = false;


// if(candidateAge >= 18){
//     if(isCitizen === true){
//       if(isRegistered === true){
//     console.log("They are eligible to vote");
//       }else{
//     console.log("They are not eligibile due to registration status")
//       }
//     }else{
//     console.log("Not eligible due to citizenship status")
//     }
// }else{
//     console.log("They are not eligivle to vote");
// }










//                   switch statement 

// let day = "Saturday";

// switch(day){
//     case "Monday":
//         console.log("Learning at home");
//         break;

//     case "Tuesday":
//         console.log("Learning at home");
//         break;
        
//     case "Wednesday":
//         console.log("Learning at home");
//         break;
        
//     case "Thursday":
//         console.log("Learning at home");
//         break;
        
//     case "Friday":
//         console.log("Complete pending works of home");
//         break;

//     case "Saturday":
//         console.log("Going to university");
//         break;
        
//     case "Sunday":
//         console.log("Going to university")    
//         break;
 
//     default :
//         console.log("No condition match")   
// }













//                       loops


// --> while loop

// let num = 1;

// while(num <= 10){
//     console.log(num);
//     num++;
// };


// --> do while loop

// let num = 16;

// do{
//     console.log(num);
//     num++;
// }while(num <= 10);


// let num = 16; // conditon is false but run code atleast one time

// do{
//     console.log(num);
//     num++;
// }while(num <= 10);


// --> for loop 

// for(let num = 1; num <= 10; num++){
//     console.log(num);
// }


// for(let num = 1; num <= 10; num++){
//     console.log(`10 * ${num} = ${num * 10}`);
// }


// for(let i = 1; i <= 5; i++){
//     let pattern = "";
//     for(let j = 1; j <= i; j++){
//         pattern = pattern + " *";
//     }
//     console.log(pattern);
    
// }








//                         Functions

// --> normal function

// function sum (a,b){
//     console.log(a + b);
// }
// sum(5,5);


// --> using return

// function sum (a,b){
//     return a + b;
        // after return code was not executed
// }
// console.log(sum(4,9));
// console.log(sum(5,5));



// --> function ecpresion (store function in variable and invock by variable name)

// let result = function sum (a,b) {
//     console.log(a+b);
// }
// result(5,5);



// --> Anonymous function

// let result = function (a,b){
//     console.log(a + b);
// }
// result(5,5);



// --> IIFE


// (function (a,b){
//     console.log(a + b);
// })(5,5);


// var result = (function (a,b){
//     console.log(a + b);
//     return a + b;
// })(5,5);

// console.log(`The sum of two number is ${result} `)



// --> default parameters

// function sum (a, b=5){
//     return a + b;
// }

// // console.log(sum(5));
// console.log(sum(5,10));



// arrow function

// let sum = (a,b) => {
//     console.log(a + b);
// }
// sum(5,5);


// let sum = myName => console.log(`My name is ${myName}`);
// sum("Abdullah Tayyab")


// const isReverse = (str) => {
//     for(let char = 0; char < str.length; char++) {
//         console.log(str[char]);
//     }
// };
// isReverse("hello world")


// const isReverse = (str) => {
//     let reverse = "";
//     for(let char = str.length -1; char >= 0; char--) {
//         reverse = reverse + str[char];
//     }
//     return reverse;
// };
// console.log(isReverse("hello world"))






//                       Array

// ---> creat array

// --> Using array constructor

// let fruits = new Array ('apple', 'orange', 'banana');
// console.log(fruits);


// --> Using array literal

// let fruits = ["apple", "orange", "banana"];
// console.log(fruits);


// --> we can also creat an empty array

// let arr = [];
// console.log(typeof arr); // object





// ---> Modifying elements

// let fruits = ["apple", "banana"];
// console.log(fruits);
// fruits[2] = "grapes"; // add value in the end array
// // fruits[1] = "grapes"; // replase the value of the index
// console.log(fruits);




// --- > Array Traversal / Iterating over array

// --> for of loop , also known as iterable 
// let fruits = ["Apple", "Orange", "Mango", "Grapes", "Banana"]

// for (let fruit of fruits){
//     console.log(fruit);
// };


// --> for in loop , iterate over the properties (including indices) of an object 
// let fruits = ["Apple", "Orange", "Mango", "Grapes", "Banana"]

// for (let fruit in fruits){
//     console.log(fruit);
// };





// --> forEach method

// let fruits = ["Apple", "Orange", "Mango", "Grapes", "Banana"]
// fruits.forEach((currEle,index,arr)=>{
//      console.log(`${currEle} ${index}`);

//     //  console.log(arr);
// });

// -> return (No)
// let fruits = ["Apple", "Orange", "Mango", "Grapes", "Banana"]
// const myForEachArr = fruits.forEach((currVal , index , arr) => {
//     return `${currVal} ${index}`;
// }); 
// console.log(myForEachArr);

// Note : Use the forEach method to performs an action on each element


// --> map method

// let fruits = ["Apple", "Orange", "Mango", "Grapes", "Banana"]
// fruits.map((currEle,index,arr)=>{
//      console.log(`${currEle} ${index}`);

//     //  console.log(arr);
// });


// -> return (Yes)
// let fruits = ["Apple", "Orange", "Mango", "Grapes", "Banana"]
// const myMapArr = fruits.map((currVal , index , arr) => {
//     return `${currVal} ${index}`;
// }); 
// console.log(myMapArr);

// Note : Use the .map method creates a new array with transformed alements


// find()
// let numbers = [1,2,3,6,5,6,7,8,9];
// const result = numbers.find((currval) => {
//     return currval > 8
// })
// console.log(result);


// findIndex()
// let numbers = [1,2,3,6,5,6,7,8,9];
// const result = numbers.findIndex((currVal) => {
//     return currVal > 8
// })
// console.log(result);


// filter()
// let numbers = [1,2,3,6,5,6,7,8,9];
// const result = numbers.filter((currVal) => {
//     return currVal > 5
// })
// console.log(result);


// reduce(accumlator,curr,index,)
//  let productPrice = [100,200,300,400,500];
//  const totalPrice = productPrice.reduce((accum,curr) => {
//     return accum + curr
//  })
// console.log(totalPrice);





// ---> Aray methods

// unshift()  // add the element to the start of the array
// let fruits = ["Apple", "Orange", "Mango"]
// fruits.unshift("banana");
// console.log(fruits);

// --> push() add element to the end of array
// let fruits = ["Apple", "Orange", "Mango"]
// fruits.push("Grapes")
// console.log(fruits);


// shift() delete first element of the array
// let fruits = ["Apple", "Orange", "Mango"]
// fruits.shift();
// console.log(fruits);


// pop() delete last element of the array
// let fruits = ["Apple", "Orange", "Mango"]
// fruits.pop();
// console.log(fruits);


// splice(start-index,delete-count,"add new element");
// let fruits = ["Apple", "Orange", "Mango"]
// fruits.splice(1,1,"Banana");
// console.log(fruits);


// indexOf(searching-value,from-index search start to upword);
// let fruits = ["Apple", "Orange", "Mango","Grapes", "Banana"]
// console.log(fruits.indexOf("Grapes",1));


// lastIndexOf(searching-value, from index search start to backword)
// let numbers = [1,2,3,6,5,6,7,8,9];
// console.log(numbers.lastIndexOf(6,5));


// includex(searching value) // searching the value and return true or false
// let fruits = ["Apple", "Orange", "Mango"]
// console.log(fruits.includes("Mango"));


// sort()
// apply to array of string
// let fruits = ["apple","orange","banana","water mellon"]
// console.log(fruits.sort());

// apply to array of numbers
// let nums = [1,2,5,10];
// console.log(nums.sort()); // wrong output [1,10,2,5]

// let numbers = [12,25,13,84,85,66,17,81,90];
// numbers.sort((a,b) => a - b);
// console.log(numbers); // assending order

// let numbers = [12,25,13,84,85,66,17,81,90];
// numbers.sort((a,b) => b - a);
// console.log(numbers); // decending order






















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


const isReverse = (str) => {
    let reverse = "";
    for(let char = str.length -1; char >= 0; char--) {
        reverse = reverse + str[char];
    }
    return reverse;
};
console.log(isReverse("hello world"))






//                       Array







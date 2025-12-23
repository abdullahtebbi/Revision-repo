// ---> Sync in js

// --> synchronous programing

// console.log('hello one');
// console.log('hello tow');
// console.log('hello three');
// console.log('hello four');


// --> Asynchronous progranming

// console.log("hello one");
// console.log("hello two");
// setTimeout(() => {
//    console.log("hello world");
// }, 3000);
// console.log("hello three");
// console.log("hello four");



// ---> callbacks

function sum (a,b){
    console.log(a + b);
}


function calculator (a,b,sumCallBack){
    sumCallBack(a,b);
}


calculator(1,2,sum);













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


// function sum (a,b) {
//     console.log(a + b);
// }

// function calculator (a,b,sumCallBack){
//     sumCallBack(a,b)
// }

// calculator(1,2,sum);


// ---> callbacks hell

// function getData (dataId,getNextData) {
//     setTimeout(()=>{
//         console.log(`data = ${dataId}`);
//         if(getNextData){
//            getNextData();
//         }
//     },2000)
// }

// getData(1,()=> {
//     console.log("getting data 2 .....");
//     getData(2,() => {
//     console.log("getting data 3 .....");
//         getData(3,()=> {
//     console.log("getting data 4 .....");
//             getData(4);
//         });
//     });
// });



// ---> promices

// let promise = new Promise ((resolve,reject) => {
//     console.log("I am a promise");
//     // resolve("success");
//     reject("some error");
// })


// function getData (dataId){
//        return new Promise ((resolve,reject)=> {
//         setTimeout(()=> {
//             console.log(`data = ${dataId}`);
//             resolve("success");
//         },5000)
//        })
// }




// const getPromise = () => {
//     return new Promise ((resolve,reject)=> {
//         console.log("I am a promise");
//         // resolve("success");
//         reject("some error") 
//     });
// }

// let promise = getPromise();
// promise.then((res)=> {
//     console.log("promise fulfilled", res);
// });

// promise.catch((err)=> {
//     console.log("rejected", err);
// })




// -->  promise chain

// function asyncFunc1 (){
//      return new Promise ((resolve,reject) => {
//         setTimeout(() => {
//          console.log("data1");
//          resolve("success")
//         },3000);
//      });
// }

// function asyncFunc2 (){
//      return new Promise ((resolve,reject) => {
//         setTimeout(() => {
//          console.log("data2");
//          resolve("success")
//         },3000);
//      });
// }

// console.log("fecthing data1 ..... ");
// asyncFunc1().then((res) => {
//     console.log(res);
//     console.log("fecthing data2 ....");
// asyncFunc2().then((res)=> {
//         console.log(res);
//     });
// }); 


// function getData (dataId){
//     return new Promise ((resolve,reject)=> {
//         setTimeout(()=> {
//          console.log(`data ${dataId}`);
//          resolve("success");
//         },3000);
//     });
// }


// getData(1).then((res)=> {
//      return getData(2);
// }).then((res)=> {
//     return getData(3);
// }).then((res) => {
//     console.log(res);
    
// })





// ---> Async await

// function api () {
//     return new Promise((resolve,reject)=> {
//         setTimeout(()=> {
//             console.log("wether data");
//             resolve(200);
//         } , 2000);
//     });
// }

// async function getWetherData (){
//     await api() // first call
//     await api() // second call
// }


// function getData (dataId) {
//     return new Promise((resolve,reject) => {
//         setTimeout(()=> {
//             console.log(`data ${dataId}`);
//             resolve("success");
//         },2000);
//     });
// }


// async function getAllData () {
//     console.log("getting data1 ....")
//     await getData(1);
//     console.log("getting data2 ....")
//     await getData(2);
//     console.log("getting data3 ....")
//     await getData(3);
//     console.log("getting data4 ....")
//     await getData(4);
// }

// using IIFE ()();

// (
//     async function () {
//     console.log("getting data1 ....")
//     await getData(1);
//     console.log("getting data2 ....")
//     await getData(2);
//     console.log("getting data3 ....")
//     await getData(3);
//     console.log("getting data4 ....")
//     await getData(4);
// }
// )();

















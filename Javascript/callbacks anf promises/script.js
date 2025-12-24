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

// function sum (a,b){
//     console.log(a + b);
// }


// function calculator (a,b,sumCallBack){
//     sumCallBack(a,b);
// }


// calculator(1,2,sum);




// ---> callbacks hell

// function getData (dataId){
//     console.log(`data = ${dataId}`);
// }

// function getData (dataId,getNextData){
//     setTimeout(()=> {
//         console.log(`data ${dataId}`);
//         if(getNextData){
//             getNextData();
//         }
//     }, 2000)
// }

// getData(1,()=> {
//     console.log("getting data 2.......");
//     getData(2,()=> {
//     console.log("getting data 3.......");
//         getData(3,()=>{
//     console.log("getting data 4.......");
//             getData(4)
//         });
//     });
// });


// ---> promices

// let promise = new Promise((resolve,reject)=> {
//     console.log("I am a promice");
//     // resolve("success")
//     reject("some error")
// })


function getData (dataId,getNextData){
    return new Promise((resolve,reject) => {
        setTimeout(()=> {
            console.log(`data ${dataId}`)
            resolve('success')
            if(getNextData){
                getNextData();
            }
        },9000)
    })
}







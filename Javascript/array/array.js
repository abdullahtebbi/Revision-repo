//                               Arrays (mutable)

///////

// ---> creat array 
// let marksArr = [54,32,68,48,11];



// ---> inbuilt properties
// let marksArr = [54,32,68,48,11];
// console.log(marksArr.length);

///////



///////

// ---> array indices (arr[])

// let marksArr = [74,83,39,89,83];
// console.log(marksArr[1]);

// change item 
// let marksArr = [74,83,39,89,83];
// marksArr[1] = 33;
// console.log(marksArr);

///////



//////

// ---> Looping over an array

// --> using for loop

// let cities = ['Faisalabad','Lahore','Islamabad','Karachi']
// for(let i=0; i<cities.length; i++)[
//     console.log(cities[i])
// ]

// --> using for of loop

// let cities = ['Faisalabad','Lahore','Islamabad','Karachi']
// for(let city of cities)[
//     console.log(city)
// ]

//////



//////

// practice 

// Q-1
// using for loop

// let marksArr = [85,97,44,37,76,60];
// let sum = 0;
// for(let i=0; i<marksArr.length; i++){
//   sum += marksArr[i];
// }
// console.log(`Average marks of the class = ${sum / marksArr.length}`);



// using for of loop

// let marksArr = [85,97,44,37,76,60];
// let sum = 0;
// for(let val of marksArr){
//     sum += val
// }
// console.log(`Average marks of the class = ${sum / marksArr.length}`);



// Q-2

// let priceArr = [250,645,300,900,50];
// for(let i=0; i<priceArr.length; i++){
//     console.log(`Value at index ${i} = ${priceArr[i]}`);  
//     console.log(`Value after offer = ${priceArr[i] / 100 * 90}`);
//     priceArr[i] =  priceArr[i] / 100 * 90;
// }

// console.log(priceArr); // change original array

//////



//////

// ---> Array methods

// --> array.push()  // add items at end   change original array

// let fruits = ['apple','banana','lichi']
// console.log(fruits);

// fruits.push('grapes');
// console.log(fruits);



// ---> array.unshift() // add items at start

// let fruits = ['apple','banana','mango']

// console.log(fruits);
// fruits.unshift('lichi');
// console.log(fruits);



// ---> array.pop() // change origianl array

// let fruits = ['apple','banana','lichi','grapes']
// console.log(fruits);

// fruits.pop()
// console.log(fruits);

// return delete item 
// let deletedItems = fruits.pop();
// console.log(`delete item is : ${deletedItems}`);



// ---> array.shift() // remove value at start  // change original array

// let fruits = ['grapes','apple','banana','mango']

// console.log(fruits);
// console.log(fruits.shift());
// console.log(fruits);



// ---> array.toString() // do not change original array

// let arr = [73,89,22,91];
// console.log(arr);
// console.log(arr.toString());
// console.log(arr);



// ---> array.concat(arry1) // do not change original array

// let arr1 = [84,90,73,99];
// let arr2 = [83,11,22,33];
// let result = arr1.concat(arr2);
// console.log(result);



// ---> array.slice() // do not change original array

// let fruits = ['grapes','apple','banana','mango']
// console.log(fruits.slice(1,3));



// array.splice(stating index,del count items,new element) //  change original rray

// let fruits = ['grapes','apple','banana','mango']
// let updateArr = fruits.splice(1,1,'lichi')
// console.log(fruits);


//////


//////

// ---> map
// creat a mew array with the result of soem opetation. They value is callback returns are used to form new array

// let arr = [23,45,83,33];

// arr.map((val) => {
//     console.log(val);
    
// })


// make new array
// let arr = [23,45,83,33];

// let demo = arr.map((val) => {
//     return val * 2;
    
// })
// console.log(demo);

//////



//////

// ---> filter
// Creats a new array of elements that give true for a condition / filter. Eg : all even elements


// let arr = [1,2,3,4,5,6,7,8,9];

// let evenArray = arr.filter((val) => {
//     return val % 2 === 0
// })

// console.log(evenArray);

//////



//////

// ---> reduse 
// perform some operations and reduse the array to a single value. It return that single value

// let arr = [1,2,3,4,5,6];

// let sumArr = arr.reduce((pre,curr) => {
//     return pre + curr;
// })
// console.log(sumArr);


// let arr = [1,2,3,14,5,6];

// let sumArr = arr.reduce((pre,curr) => {
//     return pre > curr ? pre : curr;
// })
// console.log(sumArr);

//////



//////

// practice question

// question one
// let marksAr = [77,98,32,88,91,95];

// let newArr = marksAr.filter((val) => {
//     return val >= 90 ;
// })

// console.log(newArr);


// question two

// let n = 8;
// let arr = [];

// for (let i=1; i<=n; i++){
//     arr[i-1] = i;
// }
// console.log(arr);

// let sumArr = arr.reduce((pre,curr) => {
//     return pre + curr;
// })
// console.log(sumArr);

// let fectorial = arr.reduce((pre,curr) => {
//     return pre * curr;
// })
// console.log(fectorial);



// question three













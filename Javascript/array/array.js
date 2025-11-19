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

// --> array.push()     change original array

// let fruits = ['apple','banana','lichi']
// console.log(fruits);

// fruits.push('grapes');
// console.log(fruits);



// ---> array.pop() // change origianl array

// let fruits = ['apple','banana','lichi','grapes']
// console.log(fruits);

// fruits.pop()
// console.log(fruits);

// return delete item 
// let deletedItems = fruits.pop();
// console.log(`delete item is : ${deletedItems}`);



// ---> array.toString()























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

//     // console.log(arr);
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
//     return currval > 6
// });
// console.log(result);


// findIndex()
// let numbers = [1,2,3,6,5,6,7,8,9];
// const result = numbers.findIndex((currVal) => {
//     return currVal > 6
// });
// console.log(result);


// filter()
// let numbers = [1,6,3,6,5,6,7,8,9];
// const result = numbers.filter((currVal) => {
//     return currVal > 5
// })
// console.log(result);


// reduce(accumlator,curr,index,)
//  let productPrice = [100,200,300,400,500];
//  const totalPrice = productPrice.reduce((accum,curr) => {
//     return accum + curr
//  });
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
// let fruits = ["Apple", "Orange", "Mango","Grapes", "Banana"];
// console.log(fruits.indexOf("Grapes",1));


// lastIndexOf(searching-value, from index search start to backword)
// let numbers = [1,2,3,5,6,7,6,2];
// console.log(numbers.lastIndexOf(2,5));


// includes(searching value) // searching the value and return true or false
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






//            String

//---> creat string

// let str = "Hello world";
// console.log(str);

// let str = 'Hello World';
// console.log(str);


// ---> string searching methods

// --> indexOf()
// let str = "Hello World";
// console.log(str.indexOf("World"));


// --> lastIndexOf()
// let str = "Hello Javascript, welcome to our world best Javascript course";
// console.log(str.lastIndexOf("Javascript"));

// --> search();
// let str = "Hello Javascript, welcome to our world best Javascript course";
// console.log(str.search(/javascript/gi)); //g is searching globaly and i is ignore to case sensitvity


// --> match()
// let str = "Hello Javascript, welcome to our world best Javascript course";
// result = str.match("Javascript") // normal search
// result = str.match(/javascript/gi) // searching with regular expression
// console.log(result);


// -->  matchAll(); // allways searching with global flag by defalt
// let str = "Hello Javascript, welcome to our world best Javascript course";
// let result = str.matchAll("Javascript");
// console.log(result); // return empty iterator array
// console.log(...result); // using spread operator


// --> includes();
// let str = "Hello Javascript, welcome to our world best Javascript course";
// let result = str.includes("Java");
// console.log(result);


// --> startWith();
// let str = "Hello Javascript, welcome to our world best Javascript course";
// let result = str.startsWith("Hello");
// console.log(result);


// --> endsWith();
// let str = "Hello Javascript, welcome to our world best Javascript course";
// let result = str.endsWith("course");
// console.log(result);


// ---> Strind methods

// --> slice(start-index,last-index+1)
// let myName = "Hello Tayyab";
// console.log(myName.slice(6,12));
// // console.log(myName.slice(-6)); 
 

// --> substring();
// let str = "Hello this is Tayyab";
// let result = str.substring(6);
// console.log(result);

// --> replace();
// let str = "Yello World";
// let result = str.replace("Y","H");
// console.log(result);


// --> replaceAll();
// let str = "Hello Javascript, welcome to our world best Javascript course";
// let result = str.replaceAll("javascript","Python")
// console.log(result);


// --> charAt();
// let str = "Hello this is Tayyab";
// let result = str.charAt(6)
// console.log(result);


// --> charCodeAt();
// let str = "Hello this is Tayyab";
// let result = str.charCodeAt(6)
// console.log(`code of char "${str[6]}" is ${result}`);


// --> at();
// let str = "Hello this is Tayyab";
// let result = str.at(14);
// let result = str.at(-6)
// console.log(result);


// --> toLowerCase();
// let str = "HELLO WORLD";
// console.log(str.toLowerCase());

// --> toUpperCase()
// let str = "hello world";
// console.log(str.toUpperCase());


// --> trim()
// let str = "     hello world       ";
// console.log(str);
// console.log(str.trim());


// --> split();
// let str = "apple,banana,orange";
// console.log(str.split(","));
// console.log(str.split(",").reverse());



//         Math functions


// ---> Math.round()
// console.log(Math.round(4.49)); // 4
// console.log(Math.round(4.5)); // 5
// Note : Round to the nearest inter.


// ---> Math.floor()
// console.log(Math.floor(4.1)); // 4
// console.log(Math.floor(4.49)); // 4
// console.log(Math.floor(4.7)); // 4
// console.log(Math.floor(4.9)); // 4
// console.log(Math.floor(-5.9)); // -6 
// console.log(Math.floor(-9.9)); // -10 
// Note : Always rounds down to the nearest integer.


// ---> Math.ceil()
// console.log(Math.ceil(4.1)); // 5
// console.log(Math.ceil(4.01)); // 5
// console.log(Math.ceil(4.5)); // 5
// console.log(Math.ceil(4.99)); // 5
// Note : Always rounds up to the nearest integer.


// ---> Math.trunc() behave same of floor but not same -negative value case
// console.log(Math.trunc(3.1)); // 3
// console.log(Math.trunc(3.99)); // 3
// console.log(Math.trunc(-4.9)); // -4


// ---> Math.pow()
// console.log(Math.pow(2,4)); // 16
// console.log(2 ** 4); // Method - 2 (E6)


// ---> Math.sprt()
// console.log(Math.sqrt(25)); // 5


// ---> Math.log(x) return the natural logarithm of x
// console.log(Math.log(7));
 

// ---> Math.log2(x) return the base 2 logarithm of x
// console.log(Math.log2(7));


// ---> Math.random()
// console.log(Math.random() * 100);
// console.log(Math.floor(Math.random() * 100)); // using floor skip the after of pointed values
// console.log((Math.random() *  100).toFixed(2)  );







//----------------------------------------- DOM --------------------------------------------------//

// ---> getting alement by id

// let getEleById = document.getElementById("heading");
// console.log(getEleById); // return the element

// getting the text in element
// console.log(getEleById.innerHTML);   //   DOM API 
// console.log(getEleById.innerText);   //   DOM API
// console.log(getEleById.textContent); //   DOM API



// ---> getting element by className

// let getEleByClassName = document.getElementsByClassName("list-of-nodes");
// // console.log(getEleByClassName);

// // getting the text in element

// for(let ele of getEleByClassName){
//         console.log(ele.innerHTML);
//         console.log(ele.innerText);
//         console.log(ele.textContent);
        
// }



// ---> getting element by tagName


// let getEleByTagName = document.getElementsByTagName("li");
// // console.log(getEleByTagName);

// // apply for of loop of tag colections

// for (let ele of getEleByTagName){
//         console.log(ele)
// }



// getting element by querySelector

// let getEleByQuerySelector = document.querySelector("#heading");
// // console.log(getEleByQuerySelector);

// // change the innerText
// console.log(getEleByQuerySelector.innerText = "Hello World");



// getting element by querySelectorAll

// let getEleByQuerySelectorAll = document.querySelectorAll("li");
// console.log(getEleByQuerySelectorAll);

// // get innertext in the elements of colection using for loop
// // for(let ele of getEleByQuerySelectorAll){
// //         console.log(ele.innerText);
// // }



// ---> todo-list

// let inputVal = document.querySelector("#input");
// let button = document.querySelector("#button");
// let showValueArea = document.querySelector("#value-area");
// let valDiv = document.querySelector("#value-area");


// const addTodo = () => {

//         let creatP = document.createElement("p");
//         creatP.textContent = inputVal.value;
//         valDiv.append(creatP);

//         inputVal.value = "";
// }

// button.addEventListener("click", ()=> {
//         addTodo();
// })

// valDiv.addEventListener("click", (event) => {
//         let currVal = event.target;
//         currVal.remove();
// })




///////////////////////// EVENTS

////// ---> Event handler using dom

// let btn = document.getElementById("my-btn");

// btn.onclick = () => {
//         alert("Welcome");
// }

// let btn2 = document.getElementById("my-btn1");

// btn2.ondblclick = () => {
//         alert("Welcome");
// }


// let btn3 = document.getElementById("my-btn2");

// btn3.onmouseover = () => {
//         alert("Welcome");
// }





////// ---> Event handler using addEventLitner

// let btn1 = document.getElementById("btn-1");

// btn1.addEventListener("click", () => {
//         alert("Welcome");
// })


// let btn2 = document.getElementById("btn-2");

// btn2.addEventListener("dblclick", () => {
//         alert("Welcome");
// })


// let btn3 = document.getElementById("btn-3");

// btn3.addEventListener("mouseover", () => {
//         alert("Welcome");
// })






////// ---> mouse events

// let div = document.getElementById("div");
// let btn = document.getElementById("btn");

// --> click event
// div.addEventListener ("click", () => {
//         div.style.backgroundColor = "green";
//         btn.textContent = "Mouse is clicked";
//         console.log("Fire click event");

// });



// --> dblclick event
// div.addEventListener ("dblclick", () => {
//         div.style.backgroundColor = "green";
//         btn.textContent = "Mouse is clicked two times"
//         console.log("Fire dblclick event");
           
// });



// --> mouseenter event (only work for parent element not children)
// div.addEventListener("mouseenter", () => {
//     div.style.backgroundColor = "red";
//     btn.textContent = "Mouse Enter the div"
//     console.log("Fire mouseenter event");
// });



// --> mouseleave event
// div.addEventListener("mouseleave", () => {
//     div.style.backgroundColor = "green";
//     btn.textContent = "Mouse leave the div";
//     console.log("Fire mouseleave event");
// });



// --> mouseover event (working on element + children )
// div.addEventListener("mouseover", () => {
//         div.style.backgroundColor = "red";
//         btn.textContent = "Mouse is over the div";
//         console.log("Fire mouseover event");

// });



// --> mouseout event
// div.addEventListener ("mouseout", () => {
//         div.style.backgroundColor = "green";
//         btn.textContent = "Mouse is out the div";
//         console.log("Fire mouseout event");   
// });



// --> mouseup event
// div.addEventListener ("mouseup", () => {
//         div.style.backgroundColor = "green";
//         btn.textContent = "Mouse Up";
//         console.log("Fire mouseup event");
// });



// --> mousedown event
// div.addEventListener ("mousedown", () => {
//         div.style.backgroundColor = "green";
//         btn.textContent = "Mouse Down";
//         console.log("Fire mousedown event");
// });



// --> mousemove event
// div.addEventListener ("mousemove", () => {
//         div.style.backgroundColor = "green";
//         btn.textContent = "Mouse is moving the div";
//         console.log("Fire mousemove event"); 
// });



// --> contextmenu event
// div.addEventListener ("contextmenu", () => {
//         div.style.backgroundColor = "green";
//         btn.textContent = "Text Menu";
//         console.log("Fire contextmenu event");
// });





////// ---> Keybord Events

// let input = document.getElementById("text-input");

// --> keyup
// input.addEventListener("keyup", (e) => {
//         console.log("Fire keyup event");
//         console.log(`key = ${e.key}`);
//         console.log(`Code = ${e.code}`);
//         console.log(`Type = ${e.type}`);     
// });



// --> keydown
// input.addEventListener("keydown", (e) => {
//         console.log("Fire keydown event");
//         console.log(`key = ${e.key}`);
//         console.log(`Code = ${e.code}`);
//         console.log(`Type = ${e.type}`);     
// });





////// ---> input events

// --> input event

// let input = document.getElementById("text-input");

// input.addEventListener("input", (e) => {
//         console.log("Fire input event");
//         console.log(`Value = ${e.target.value}`);
//         console.log(`Name = ${e.target.name}`);
//         console.log(`Input type = ${e.inputType}`);
//         console.log(`Event Type = ${e.type}`)
// });


// --> change event

// input.addEventListener("change", (e) => {
//         console.log("Fire input event");
//         console.log(`Value = ${e.target.value}`);
//         console.log(`Name = ${e.target.name}`);
//         console.log(`Event Type = ${e.type}`)
// });


// ------------------------------------------------------------------------------------------------ //







//---------------------------------- local storage & JSON ------------------------------------------//

// ---> Add the data from localStorage      
// localStorage.setItem("data1","any data about data1");
// localStorage.setItem("data2","any data about data2");


// ---> Get the data from localStorage
// console.log(localStorage.getItem("data"));      


// ---> remove the data from lacalStorage
// console.log(localStorage.removeItem("data2"));

// Note : Local storage can only store strings, so when you want to store a complex data structure like an array or an abject, you need to convert it to a string JSON.stringify.


// ---> JSON (JSON.stringify() , JSON.parse()) 


// const studentData = {
//         fullName : "Abdullah Tayyab",
//         age : 21,
//         gender : "Male",
//         progran : "Engineering in Artificial Intellijence",
//         adtess : {
//                 city : "Jaranwala",
//                 Town : "Deffence",
//                 streetNo : 5 
//         },
// };


// console.log(localStorage.setItem("studentBioData", JSON.stringify(studentData)));

// console.log(JSON.parse(localStorage.getItem("studentBioData")));

// ------------------------------------------------------------------------------------------------ //




// --------------------------------- Dates and Time ----------------------------------------------- //

// --> new Date();
// const newDate = new Date();
// console.log(newDate);


// --> new Date(dateString);
// const dateString = "Fri Jan 30 2026 02:54:18 GMT+0500 (Pakistan Standard Time)";
// console.log(new Date(dateString));


// --> new Date(year , month);
// console.log(new Date(2003,7));


// new Date(year , month , dat);
// console.log(new Date(2003, 6, 14));


// new Date(year, month, day, hour);
// console.log(new Date(2003, 6, 14, 3));


// new Date(year, month, day, hour, minuts);
// console.log(new Date(2003, 6, 14, 3, 33));


// new Date(year, month, day, hour, minuts, seconds);
// console.log(new Date(2003, 6, 14, 3, 33, 33));


// new Date().getTime(); //return milli seconds from ( 1 jan 1070 to current time)
// console.log(new Date().getTime());



// ---> get date methods / getting components

// --> getting year
// const date = new Date();
// const year = date.getFullYear();
// console.log(year);


// getting month
// const date = new Date();
// const month = date.getMonth();
// console.log(month)


// getting day
// const date = new Date();
// const day = date.getDay();
// console.log(day);



// getting hour
// const date = new Date();
// const hour = date.getMonth();
// console.log(hour);





// ---> set Date Methods / setting compunents

// --> setFullYear(year); 
// const date = new Date();
// console.log(date); // before
// date.setFullYear(2027);
// console.log(date); // after


// --> setMonth();
// const date = new Date();
// console.log(date);
// date.setMonth(0);
// console.log(date);





// ---> usefull methods of the date object in javascript

// const date = new Date();

// --> toDateString();
// console.log(date.toDateString()); // --> Tue Feb 03 2026

// --> toLocalDateString()
// console.log(date.toLocaleDateString()); // --> 2/3/2026

// --> toTimeString()
// console.log(date.toTimeString()); // --> 00:35:27 GMT+0500 (Pakistan Standard Time)

// --> toLocalTimeString() 
// console.log(date.toLocaleTimeString()); // --> 12:38:20 AM


// --> Date.parse()  (convert utc format time to millisecong)
// const date = "Tue Feb 03 2026 00:41:42 GMT+0500"
// const parseDate = Date.parse(date);
// console.log(parseDate);

// --> Date.now(date)  (return now time in millisecond)
// console.log(Date.now());

// --> .getTime() (return time to millisecond)
// console.log(date.getTime());




// ---> setTimeOut();

// function delayedFunction () {
//         console.log('work after two seconds');
// }


// setTimeout(delayedFunction , 2000)


// function delayedFunction (x) {
//         console.log('work after two seconds', x);
// }


// setTimeout(() => delayedFunction(5) , 2000)



  

// ---> setInterval()

// function replayedFunction () {
//         console.log("run after every two seconds");
// }

// setInterval(replayedFunction , 2000)




// ---> clearInterval()

// const repeatedFunction = () => {
//         console.log("This function repeats every 1 second");
// };

// const setIntervalId = setInterval(repeatedFunction , 1000);

// setTimeout(() => {
// clearInterval(setIntervalId);
// console.log("Function was stoped")
// },5000);


// in this code we stoped the setinterval function stoped after 5 seconds using clearinterval with settime out.

// ------------------------------------------------------------------------------------------------ //




// ----------------------------------------- Objects--------------------------------------------- //

// ---> creat object

// const student = {
//         fullName : "Abdullah Tayyab",
//         id : 1234,
//         Age : 22,
//         ifStudent : true,
//         adress : {
//              town : "Deffence View",
//              face : 2,
//              streetNo : 5
//         },
//         greet : function (){
//                 console.log("Hello World");
                
//         }
// };


// ---> accessing properties of the object

// --> dot notation
// console.log(student.fullName);
// console.log(student.id);
// console.log(student.Age);
// console.log(student.ifStudent);
// console.log(student.adress);
// console.log(student.adress.town);
// console.log(student.adress.face);
// console.log(student.adress.streetNo);
// console.log(student.greet());


// --> bracket notation
// console.log(student["fullName"]);
// console.log(student["id"]);
// console.log(student["Age"]);
// console.log(student["ifStudent"]);
// console.log(student["adress"]);
// console.log(student["adress"].town);
// console.log(student["adress"].face);
// console.log(student["adress"].streetNo);
// console.log(student["adress"]["streetNo"]); // method two to access the property of the object




// ---> adding and modifying properties of the object

// student.skill = "AI Driven Full Stack Developer"; // add in object 
// student.Age = 22.5; // update in object
// console.log(student);




// ---> Method call in object

// student.greet()




// ---> We can add dynamic keys in an object

// let idType = "collegeId";
// let student = {
//         [idType] : "A12345", // dynamic key based on idType
//         sName : "Tayyab",
//         sAge : 21,
//         isStudent : true,
//         greet : function () {
//                 console.log(`Hey, my ${idType} is ${student[idType]} and my name is ${student.sName}`);
//         }
// };


// student.greet();





// ---> Pass by value vs reference

// let obj = {
//         myName : "Abdullah",
//         Gender : "Male"
// };

// let obj1 = obj;
// obj1.myName = "Tayyab";
// console.log(obj1);
// console.log("Original array", obj);


// --> Object.assign() remove pass by reference 

// let obj = {
//         myName : "Abdullah",
//         Gender : "Male"
// };

// newObj = Object.assign({} , obj);

// newObj.myName = "Tayyab";
// console.log(newObj);
// console.log("original array" , obj);





// ---> Comparison by reference 

// let obj1 = { name : "Tayyab"};
// let obj2 = { name : "Tayyab"};

// const isEqual = obj1 == obj2 ? true : false;
// console.log(isEqual); // false bacause obj1 and obj2 is stored different memories


// let obj1 = { name : "Tayyab"};
// let obj2 = { name : "Tayyab"};
// const obj3 = obj1;
// const isEqual = obj1 == obj3 ? true : false;
// console.log(isEqual); // true



// ---> Object usefull methods

// const product = {
//         id : 1,
//         category : "Computer",
//         brand : "Dell",
//         price : 999.99,
//         stock : 50,
//         discription : "Powerfull laptop with a quad-core i5 proccessor, 8gb RAM, 226gb SSD and 14inch FSD display.",
//         images : "images url"
// };


// --> Object.keys();
// let keys = Object.keys(product);
// console.log(keys);


// --> Object.values(); 
// let keys = Object.values(product);
// console.log(keys);


// --> Object.entries(); -- (Returns an array containing arrays of key-values pairs for each enumerable own property of an object.)

// let entries = Object.entries(product);
// console.log(entries);


// --> objectName.hasOwnProperty(); 
// let checkProperty = product.hasOwnProperty("id");
// console.log(checkProperty); // true


// --> Object.assign(); (Copies the values of all enumerable own properties from one or more source objects to a target object.)

// const target = {a : 1, b : 2, d : 1};
// const source = {b : 3, c : 4, d : 2};
// const mergedObject = Object.assign(target, source);
// console.log(mergedObject);


// --> Object.freeze(); freeze an object
// console.log(product);
// Object.freeze(product);
// product.id = "333";
// console.log(product);

// ------------------------------------------------------------------------------------------------ //




// ----------------------------------------- ECMAScript ------------------------------------------- //

// ---> shorthand notation for object property
// const name = "Tayyab";
// const age = 21;

// triditional way 
// const person = {name : name, age: age};
// console.log(person);

// using shorthand notation for object property
// const person = {name, age};
// console.log(person);






// ---> Destructuring  (Array)

// --> Extracting specific elements:
// const numbers = [10, 20, 30];

// triditional way
// const first = numbers[0];
// console.log(first);

// using modern javascript shorthand method
// const [first, second, third] = numbers;
// console.log(second);

// --> ignoring elements
// const [, , third] = numbers;
// console.log(third);






// ---> Destructuring (Object)

// const person = {name: "Tayyab", age: 21};

// --> Extracting properties

// -> triditional way
// const myName = person.name;
// console.log(myName);

// -> using modern javascript method
// const {name, age} = person;
// console.log(name, age);


// --> renaming properties
// const {name: fullName, age } = person;
// console.log(fullName);






// ---> Spread Operator

// --> copying an array
// let fruits = ["orange", "apple", "grapes", "banana"];
// let newFruits = [...fruits];
// console.log(newFruits);

// --> concatinating array / conbining array
// let num1 = [1,2,3,4];
// let num2 = [4,5,6];
// let newNum = [...num1, ...num2];
// console.log(newNum);

// --> Adding elements to existing array using spread operator
// let fruits = ["orange", "apple", "grapes", "banana"];
// fruits.push(...["watermellon", "strobury"]);
// console.log(fruits);

// --> convert the string into an array of its individual charactors using opread operator

// -> traditional way 
// const country = "PAKISTAN";
// console.log(country.split(""));

// -> using modern javascript method
// const country = "PAKISTAN";
// console.log([...country]);






// ---> Rest parameters

// --> traditional way
// const sum = (a,b,c,d) => {
//         return(a+b+c+d);
// }

// console.log(sum(1,2,3,4));

// --> with rest parameters
// const sum = (...numbers) => {
//     return numbers.reduce((accum,curval) => 
//         (accum = accum + curval),0
//     )
// };

// console.log(sum(1,2,3,4,5));






// ---> string padding 

// --> padStart();
// const string = "string";
// const paddedString = string.padStart(16);
// console.log(paddedString);


// --> padEnd();
// const string = "string";
// const paddedString = string.padEnd(14, "*");
// console.log(paddedString);






// ---> usefull features

// --> Array.flat
// const array = [1,2,[3,4],5,6];
// const flatArray = array.flat();
// console.log(flatArray); 

// const array1 = [1,2,3,[4,[5,6,7],8],9];
// const flatArray1 = array1.flat(2)
// console.log(flatArray1);


// --> flatMap();

// const arr = ["My Name", "is Abdullah", "Tayyab"];
// const newArr = arr.flatMap((currVall) => currVall.split(" "));
// console.log(newArr)





// ---> Object.enties() & Object.fromEntries();

// const person = {name: "Abdullah Tayyab", age: 21};
// const entries = Object.entries(person);
// console.log(entries); // convert object to array

// let newPerson = Object.fromEntries(entries);
// console.log(newPerson); // convert array to object

// console.log(person == newPerson); // false bacause compare the object-refference not content





// ---> ECMAScript Features 2020

// --> BigInt
// let maxNum = Number.MAX_SAFE_INTEGER;
// console.log(maxNum);
// let bigIntMaxNum = BigInt(maxNum)
// console.log(bigIntMaxNum + 5n);


// --> Optional chaining operator

// let person = {
//         name: "Abdullah Tayyab",
//         address : {
//                 city: "Faisalabad",
//                 zipcode: 1234
//         }
// };

// triditional way
// const checkObj = person.address ? person.address.city : "city is not present";
// console.log(checkObj);
 
// using optional chaining oprator (?.) with shorthand method
// const checkObj = person?.address?.city ?? "city is not present";
// console.log(checkObj);






// ---> ES21

// --> replaceAll();
// let str = "Hello World! Hello again";
// let newStr = str.replaceAll("Hello", "Hi");
// console.log(newStr);

// --> Replacing multiple spaces with a single space
// let str = "The     quick    brown  fox jumps      over       the   lazy      dog";
// let normalizedStr = str.replaceAll(/\s+/g , " ");
// console.log(normalizedStr);


// --> Numeric seperator (_)

// let bigNum = 1_000_000;
// console.log(bigNum); // output - 1000000






// ---> ES22

// --> .at()
// let array = [1,2,3,4,5,6,7];

// console.log(array.length-0); // output is - 7 (method one)
// console.log(array[array.length-1]); // output is - 7 (method two)
// console.log(array.at(-1)); // output is - 7 (method three shorthand method)


// --> Object.hasOwn()
 
// let person = {
//         name: "Abdullah Tayyab",
//         age: 22
// }

// triditional way but expired
// console.log(person.hasOwnProperty("name")); // true
// console.log(person.hasOwnProperty("gender")); // false

// modern way
// console.log(Object.hasOwn(person , "name"));






// ---> ES23

// --> arra.findLast()
// let array = [1,2,3,4,5,6,7];
// console.log(array.findLast((elem) => elem));


// --> arra.findLastIndex()
// let array = [1,2,3,4,5,6,7];
// console.log(array.findLastIndex((elem) => elem));


// --> .toReversed()
// let days = ["Monday","Tuesday","Thursday","Friday","Saturday","Sunday"];
// let reversedArray = days.toReversed();
// console.log(reversedArray);
// console.log("original array =" , days);
// console.log("reversed array =" , reversedArray);


// --> .toSorted();
// let days = ["Monday","Tuesday","Thursday","Friday","Saturday","Sunday"];
// let sortedArray = days.toSorted();
// console.log(sortedArray);
// console.log("original array = " , days);
// console.log("sorted array = " , sortedArray);


// --> .with();
// let name = ["Abdullah","Adrees"];
// let nameWith = name.with(1,"Tayyab");
// console.log(nameWith);
// console.log("original array =", name)




// ------------------------------------------------------------------------------------------------ //





// ----------------------------------------- Advanced Javascript ---------------------------------- //

//---> EVENT PROPAGATION --- //

// let callOuter = document.querySelector("#outer");
// let callMiddle = document.querySelector("#middle");
// let callInner = document.querySelector("#inner");

// // Outer click handler
// let outerHandler = (event) => {
//     console.table([
//         {
//             Description: "I am the outer one",
//             Target: event.target,
//             CurrTarget: event.currentTarget,
//         }
//     ]);
// };

// // Middle click handler
// let middleHandler = (event) => {
//     console.table([
//         {
//             Description: "I am the middle one",
//             Target: event.target,
//             CurrTarget: event.currentTarget,
//         }
//     ]);
// };

// // Inner click handler
// let innerHandler = (event) => {
//     console.table([
//         {
//             Description: "I am the inner one",
//             Target: event.target,
//             CurrTarget: event.currentTarget,
//         }
//     ]);
// //     stop parent call
// //     event.stopPropagation();
// };

// // Add event listeners   ---   Bubling face 
// // callOuter.addEventListener("click", outerHandler);
// // callMiddle.addEventListener("click", middleHandler);
// // callInner.addEventListener("click", innerHandler);



// // Add event listeners   ---    capturing face
// callOuter.addEventListener("click", outerHandler, true);
// callMiddle.addEventListener("click", middleHandler, true);
// callInner.addEventListener("click", innerHandler, true);


// ---------------------- //




// // ---> Event Elegation --- //

// const getListDetails = (event) => {
//         console.log(event.target.innerText);
        
// }

// document.getElementById("my-list").addEventListener("click", getListDetails);


// ---------------------- //



// --->  Functions (Advanced) --- //

// --> First class function 

// function sayHello(name){
//         return "Hello " + name + "!"; 
// }

// var greetFunction = sayHello;
// console.log(sayHello("Tayyab"));

// --> 







































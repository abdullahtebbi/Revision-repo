//                                    Strings (immutable)

///////

// ---> creat strings

// let str = 'Hello World'; // method one
// let str2 = "Hello World"; // method two


// ---> inbuilt properties

// --> .length

// let str = "Hello World";
// console.log(str.length);

// --> stringName[index]

// let str = 'Hello World';
// console.log(str[6]);

///////



///////

// ---> template literals ( `` )

// let specialString = `Hello World`;
// console.log(specialString);
// console.log(typeof specialString);


// string interpolation ( ${} )
// let product = {
//     item : 'pen',
//     price : 10
// }
// console.log(`The cost of ${product.item} is ${product.price} one dollar.`);

///////



///////

// ---> escape charactors

// --> ( \n ) // start word in new line
// let str = 'Hello \nWorld';
// console.log(str);

// --> ( \t ) // add space
// let str = 'Hello\tWorld';
// console.log(str);

///////



///////

// ---> string methods (These are built-in functions to manipulating a string)


// --> str.toUpperCase() 

// let str = 'hello world';
// let newStr = str.toUpperCase();
// console.log(newStr);
// console.log(str)  // don't change the original string



// --> str.toLowerCase()

// let str = 'HELLO WORLD';
// let newStr = str.toLowerCase();
// console.log(newStr);
// console.log(str)  // don't change the original string



// --> str.trim()

// let str = '     Hello World   ';
// let newStr = str.trim();
// console.log(newStr);
// console.log(str);



// --> str.slice(start,end) 

// let str = '01234567';
// console.log(str.slice(1,4));  // output is 123  (last index is not be included) 

// let str = 'helloworld';
// console.log(str.slice(0,5));



// --> str1.concat(str2)

// let str1 = 'Hello';
// let str2 = 'World';
// console.log(str1.concat(str2));



// --> str.replace(searchVal,newVal)

// let str = 'Abdullahtayyab';
// console.log(str.replace('ayyab','ebbi'));

// let str = 'hepypypyworld';
// console.log(str.replaceAll('py','llo'));



// --> str.charAt(index)

// let str = 'SurgeaT';
// console.log(str.charAt(6));
// console.log(str.charAt(0));




// practice 

// let userInput = prompt('Enter you full name without spaces:');
// console.log(`@${userInput.toLowerCase()}${userInput.length}`);
 


















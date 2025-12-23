let a = 5;
let b = 5;

// console.log(`1 = ${a + b}`);
// console.log(`2 = ${a + b}`);
// console.log(`3 = ${a + c}`); // error
// console.log(`4 = ${a + b}`);
// console.log(`5 = ${a + b}`);
// console.log(`6 = ${a + b}`);
// console.log(`7 = ${a + b}`);
// console.log(`8 = ${a + b}`);
// console.log(`8 = ${a + b}`);
// console.log(`10 = ${a + b}`);


// solution with try{error code}catch(err){console.log(error)}

console.log(`1 = ${a + b}`);
console.log(`2 = ${a + b}`);
try{
console.log(`3 = ${a + c}`); // error
}catch(err){
    console.log(err);
}
console.log(`4 = ${a + b}`);
console.log(`5 = ${a + b}`);
console.log(`6 = ${a + b}`);
console.log(`7 = ${a + b}`);
console.log(`8 = ${a + b}`);
console.log(`8 = ${a + b}`);
console.log(`10 = ${a + b}`);

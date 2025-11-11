///////////////////////////// types of opertators

//////

// ----> assignment operators (=) 
// (assignment oprators in programing are symbols used to assign values to variables. They take the value on the right side of the operator and assign it to the variable on the left side.)

// code
// var myFavNum = 3;

// note (= is a assignment operator)

//////

//////

// ---> Arithmetic operators 
// (Arithmetic operators in programing perform basic mathematical operations on variables or values. They include addition, substraction, multiplication, divisions and modulus.)

// code
// --> addition (+) : add two values or variables 

// var x = 4;
// var y = 6;
// var sum = x + y;
// console.log(sum);


// --> substraction (-) : subsracts the right operand to the left oparend

// var x = 8;
// var y = 3;
// var final = x - y;
// console.log(final);


// --> multiplication (*) : multiplies two variables or values

// var x = 8;
// var y = 2;
// var final = x * y;
// console.log(final);


// --> division (/) : devide the left operand by the right operand

// var x = 8;
// var y = 2;
// var final = x / y;
// console.log(final);


// --> modulus (%) : returns the reminder when the left operand is devided by the right operend.

// var x = 9;
// var y = 2;
// var final = x % y;
// console.log(final);


// --> extra consepts

// -> toFixed() function
// var x = 0.1;
// var y = 0.2;
// console.log(x + y);
// output -> 0.30000000000000004

// solution 
// console.log((x + y).toFixed(1));

//////

//////

// ---> string operator 
// There are a few ways to concatenate strings in javascript. The most common is to use the + operator. For example, to concatenate the strings "Hello" and "World", you would use the following code:

// var str1 = "Hello ";
// var str2 = "World";
// var str3 = str1 + str2;
// console.log(str3);

//////

//////

// ---> comparison operator
// conparison operator in javascript are used to compare values and return a boolean result (true or false).

// --> Equal (==) Checks if two values are equal, performing type coercion if necessary.
//  console.log(5 == 10); // false
//  console.log(5 == 5); // true

 
// --> strick equal (===)
// check if two values are equal without performing type corection.
// console.log(5 === "5"); // false
// console.log("5" === "5"); // true
// console.log("10" === "5"); // false
// console.log(5 === 5); // false


// --> not equal to (!=)
// check if two values are not equal, performing type coercion if necessary. 
// console.log(5 != 4); // true
// console.log(5 != 5); // false
// console.log(5 != "4"); // true


// --> grater than (>)
// check if the value on the left is grater then the value on the right.
// console.log(5 > 2); // true
// console.log(5 > 10); // false


// --> less than (<)
// check if the value on the left is less then the value on the right.
// console.log(5 < 2); // false
// console.log(5 < 8); // true


// --> grater than or equal to (>=)
// check if the value on the left is grater than or equal to the value on the right.
// console.log(5 >= 2); // true
// console.log(5 >= 5); // true
// console.log(5 >= 6); // false


// --> less than or equal to (<=)
// check if the value on the left is less than or equal to the value on the right.
// console.log(4 <= 5); // true
// console.log(4 <= 4); // true
// console.log(4 <= 2); // false


//////

//////

// ---> logical operators
// there are three main logical operator : && (logical AND) || (logical OR), and ! (logical NOT)

// --> logical AND (&&)
// return true if both operands are true, otherwise, it returns false.
 
// var x = 5;
// var y = 10;
// console.log(x > 0 && y == 9); // false
// console.log(x > 0 && y == 10); // true

// formulas
// true && true = true
// true && false = false
// false && false = false


// --> logical OR (||) : returns true if at least one of the operand is true, otherwise, it return false.

// var x = 5;
// var y = 10;
// console.log(x > 0 || y == 9); // true
// console.log(x > 8 || y == 9); // false

// formulas
// true || true = true
// true || false = true
// false || false = false


// --> logical NOT (!)
//  returns true if the operand is false, and false if the operand is true

// var x = 2;
// var y = 4;
// console.log(!(x == y)); // true
// console.log(!(x * x == y)); // false

// convert true into false
// convert false into true


//////

//////

// ---> ternary operator (condition ? expressionIfTrue : expressionIfFalse)

// var age = 18;
// console.log(age >= 18 ? "Yes you are eligible for driving" : "Sorry you are not eligible for driving");

//////


//////

// ---> unary operators

// --> increment operators (++)
var x = 5;

// both are same
// x = x+1; // method one
// x++;  // method two but sharp method
// console.log(x);









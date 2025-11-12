//////////////////////////// datatypes ///////////////////////////////////////////

// note : Types of data types (primitive datatypes , non primitives,object datatypes)





// ----------------------> Primitive datatypes <--------------------------------//

// (1) ---> number (datatype)

// --> integar num
// var myFavNum = 3;
// console.log(myFavNum);

// --> float num
// var cgpa = 4.3;
// console.log(cgpa);


// (2) ---> string (datatype)

// var myName = "Abdullah tayyab";
// console.log(myName);


// (3) ---> boolean (datatype)

// var smallHeight = false;
// var fitBoy = true;
// console.log(smallHeight);
// console.log(fitBoy);


// (4) ---> undefined (datatypes)

// var data;
// console.log(data);


// (5) ---> null (datatype)

// var badMemories = null;
// console.log(badMemories);


// (6) ---> bigInt (datatype)

// var myFavNum = BigInt("123");
// console.log(myFavNum); // output is (123n)


// (7) ---> symbol (datatype)

// var message = Symbol("Hello!");
// console.log(message);


// ------------------------------------------------------------------------------- //

// ----------------------> non Primitive datatypes <--------------------------------//

// ---> objects form data (colections of values)

// const student = {
//     fullName : "Abdullah Tayyab",
//     age : 22,
//     program : "AI drivern Engineering",
//     rollNum : 192041,
//     cgpa : 4.3,
//     isMarid : false
// }

// console.log(student);

// access key in object
// console.log(student.fullName); // method one
// console.log(student["fullName"]); // method two

// add values or update values in previous keys
// student["age"] = student["age"] + 1;
// console.log(student.age);

// student["program"] = "Full stack Engineer";
// console.log(student.program);















// ------------------------------------------------------------------------------- //

// Extra

// ---> typeof  (check for type)

// var myName = "Abdullah Tayyab";
// console.log(myName);
// console.log(typeof myName);



// ---> convert string to num

///////

// method one
// var numStr = "4";
// var num = Number(numStr);
// console.log(num);
// console.log(typeof num);

// in log
// console.log(Number(numStr))
// console.log(typeof Number(numStr));

///////

///////

// method two
// var numStr = "3";
// var num = +numStr;
// console.log(num);
// console.log(typeof num)

// in log
// console.log(+numStr);
// console.log(typeof +numStr);

///////

///////

// method three
// var numStr = "3";
// var num = parseInt(numStr);
// console.log(num);
// console.log(typeof num)

// in log
// console.log(parseInt(numStr));
// console.log(typeof parseInt(numStr));

//////

//////

// method four
// var numStr = "3";
// var num = parseFloat(numStr);
// console.log(num);
// console.log(typeof num)

// in log
// console.log(parseFloat(numStr));
// console.log(typeof parseFloat(numStr));

///////




// ---> convert num to string

//////

//  method one
// var str = 3;
// var numToStr = String(str);
// console.log(numToStr);
// console.log(typeof numToStr);

// in log
// console.log(String(str));
// console.log(typeof String(str));

///////

///////

//  method two
// var str = 4;
// var numTwoStr =  str.toString();
// console.log(numTwoStr);
// console.log(typeof numTwoStr);

// in log
// console.log(str.toString());
// console.log(typeof str.toString());

///////

///////

// method three
// var str = 4;
// var numToStr = `${str}`;
// console.log(numToStr);
// console.log(typeof numToStr);

// in log
// console.log(`${str}`);
// console.log(typeof `${str}`);

///////

///////

// method four
// var str = 2;
// var numToStr = str + "";
// console.log(numToStr);
// console.log(typeof numToStr)

// in log
// console.log(str + "");
// console.log(typeof (str + ""));



// ------------------------------------------------------------------------------- //

























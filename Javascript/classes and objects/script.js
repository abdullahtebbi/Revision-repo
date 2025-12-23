// creat object

const student = {
    fullName : "Abdullah Tayyab",
    marks : 99,
    printMarks : function () {
        console.log(`marks = ${this.marks}`);
    }
};


// ---> creat prototype

const employee = {
    calcTax() {
        console.log("tax rate is 10%");
    }
}

const ali = {
    sallery : 50000
}
const ali1 = {
    sallery : 50000
}
const ali2 = {
    sallery : 50000
}

ali.__proto__ = employee;
ali1.__proto__ = employee;
ali2.__proto__ = employee;


// ---> classes


// class hondaCar {
//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop");
//     }
//     setBrand(brand){
//         this.brandName = brand;
//     }
// }

// let civic = new hondaCar();
// civic.setBrand("honda-civic")
// let city = new hondaCar();
// city.setBrand("honda-city");


// --> constructor()


// class hondaCar {
//     constructor(brand,mileage){
//         console.log("creating a new abject");
//         this.brandName = brand;
//         this.mileage = mileage;
//     }
//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop");
//     }
// }

// let civic = new hondaCar("honda-civic", 10);
// console.log(civic);
// let city = new hondaCar("honda-city", 13);
// console.log(city);


// --> inheritance

// class parent {
//     hello (){
//         console.log("hello");
//     }
// }

// class Child extends parent{};
// let obj = new Child();  

// Example 2

// class person {
    
//     eat(){
//         console.log("Eat");
//     }
//     sleep(){
//         console.log("Sleep");
//     }
// }

// class doctor extends person {
//     work(){
//         console.log("treat patients");
//     }
// }
// let abdullahDoctor = new doctor();


// class engineer extends person{
//     work(){
//         console.log("Solving problems, build something");
//     }
// }
// let tayyabEngineer = new engineer();

// note --> overwriting (if child and parent have same method, child's method will be used.)



// --> super keyword

//  class person {
//     constructor(name){
//         this.species = "homo sapiens";
//         this.name = name;
//     }    
//     eat(){
//         console.log("Eat");
//     }
//     sleep(){
//         console.log("Sleep");
//     }
// }


// class engineer extends person{
//     constructor(branch,name){
//         super(name); // to incoke parent class constuctor
//         this.branch = branch;
//     }
//     work(){
//         super.eat();
//         console.log("Solving problems, build something");
//     }
// }
// let tayyabEngineer = new engineer("Computer Program Engineer","abdullah tayyab");



// ---> practice questions
//--> Q1 (You are creatind a website for your college. Creat a class user with two properties name and email. It also a method called viewData() that allows user to view vebsite data)


// let data = "website secret data"

// class user {
//     constructor(name,email){
//         this.name = name;
//         this.email = email;
//     }
//     viewData(){
//         console.log(`data = ${data}`);
//     }
// }

// let student1 = new user("Tayyab","tayyab@gmail.com")
// let student2 = new user("Abdullah","abdullah@gmail.com")



// Q2 (Creat a new class called admin which inherits from User. Add a new method called editData to admin that allows it to edit website data.)


// let data = "website secret data"

// class user {
//     constructor(name,email){
//         this.name = name;
//         this.email = email;
//     }
//     viewData(){
//         console.log(`data = ${data}`);
//     }
// }

// class admin extends user {
//     constructor(name,email){
//       super(name,email)
//     }
//     editData(){
//         data = "add some new values";
//     }
// }

// let student1 = new user("Tayyab","tayyab@gmail.com")
// let student2 = new user("Abdullah","abdullah@gmail.com")

// let adminUser = new admin("admin","admin@gmail.com");







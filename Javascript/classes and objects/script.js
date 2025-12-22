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

class person {
    
    eat(){
        console.log("Eat");
    }
    sleep(){
        console.log("Sleep");
    }
}

class doctor extends person {
    work(){
        console.log("treat patients");
    }
}
let abdullahDoctor = new doctor();


class engineer extends person{
    work(){
        console.log("Solving problems, build something");
    }
}
let tayyabEngineer = new engineer();

// note --> overwriting (if child and parent have same method, child's method will be used.)









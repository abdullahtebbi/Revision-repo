//                                 EVENTS


// ---> event handler

// let btn1 = document.querySelector("#btn-1");
// btn1.onclick = () => {
//     console.log("button was clicked");
//     alert("button was clicked")    
// }


// let btn2 = document.querySelector("#btn-2");
// btn2.ondblclick = () => {
//     console.log("button is clicking for two times");
//     alert("button is clicking for two times")
// }


// let btn3 = document.querySelector("#btn-3");
// btn3.onmouseover = () => {
//     console.log('you are inside the button');
//     alert("you are inside the button")
    
// }




// ---> event object
 
// let btn1 = document.querySelector("#btn-1");
// btn1.onclick = (e) => {
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX, e.clientY); 
// }





// ---> event listners

// let btn1 = document.querySelector("#btn-1");
// btn1.addEventListener("click" , () => {
//     console.log('button was clicked');    
// });


// btn1.addEventListener("click" , (e) => {
//     console.log('button was clicked second time');
//     console.log(e.type);
//     console.log(e.target);    
// })




// ---> remove eventlister
let btn1 = document.querySelector('#btn-1');

btn1.addEventListener('click' , () => {
    console.log("button was clicked - handler 1");
})

btn1.addEventListener('click' , () => {
    console.log("button was clicked - handler 2");
})


const handler3 = () => {
    console.log("button was clicked - handler 3");
}
btn1.addEventListener('click' , handler3)


// remove handler3 using eventListner
btn1.removeEventListener("click" , handler3)









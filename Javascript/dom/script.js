//                                     DOM menipulation

// ---> selecting with id

// let heading = document.getElementById("heading");
// console.log(heading);



// ---> selecting with class

// let clas = document.getElementsByClassName("class");
// console.dir(clas);



// ---> selecting with tag

// let para = document.getElementsByTagName("p");
// console.log(para);



// ---> query selector

// --> return first element
// let firstElement = document.querySelector("p");
// console.log(firstElement);

// -> search by class name in queryselector
// let firstElement = document.querySelector(".class");
// console.log(firstElement);

// -> search by id name in queryselector
// let firstElement = document.querySelector("#heading");
// console.log(firstElement);



// --> return all elements
// let allElements = document.querySelectorAll("p");
// console.log(allElements);
  
// -> searck by class name in queryselector
// let allElements = document.querySelectorAll(".class");
// console.log(allElements);

// -> searck by id name in queryselector
// let allElements = document.querySelectorAll("#heading");
// console.log(allElements);



// ---> properties

// --> tagName  (returns tag for elemen nodes)

// let firstElement = document.querySelector("p");
// console.log(firstElement.tagName);



// --> innerText  (returns the text content of the element and all its children)

// let div = document.querySelector("div");
// console.log(div.innerText);



// --> innerHTML (return the  plan text or HTML contents in the element)

// let div = document.querySelector("div");
// console.log(div.innerHTML);



// --> textContent  (returns textual content even for hidden elements)

// let eccessH1 = document.querySelector("h1");
// console.log(eccessH1);



// ---> atributes

// --> get atributr values

// let div = document.querySelector("div")
// console.log(div)

// let id = div.getAttribute("id");
// console.log(id)

// let name = div.getAttribute("name");
// console.log(name);

// console.log(div.getAttribute("id"));



// --> set atribute values

// let div = document.querySelector("div");
// console.log(div.setAttribute("id" , "class") , div.setAttribute("name" , "ttt"));




// ---> access and change style

// let div = document.querySelector("div");
// div.style.backgroundColor = "red";
// div.style.fontSize = "20px"
// div.innerText = "After changing styles"
// div.style.visibility = "hidden"





// ---> Insert Elements

// --> creat elements
// let newBtn =document.createElement("button");
// newBtn.innerText = "click me!"
// console.log(newBtn);



// --> add element

// -> adds at the end of node (inside) 
// let div = document.querySelector("div");
// div.append(newBtn)

// -> adds at the first of node (inside)
// let div = document.querySelector("div");
// div.prepend(newBtn);

// -> adds before the node (outside)
// let div = document.querySelector("div");
// div.before(newBtn);

// -> adds after the node (outside)
// let div = document.querySelector("div");
// div.after(newBtn);




// ---> delete node element
// let div = document.querySelector("ul");
// div.remove()
















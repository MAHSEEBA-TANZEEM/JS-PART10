// dom events onclick
// let btn = document.querySelector("button");
// console.dir(btn);

// btn.onclick = function(){
//     // console.log("button was clicked");
//     alert("button was clicked");
// }

// function sayHello() {
//     alert("HELLO!");
// }
// btn.onclick = sayHello;

// let btns = document.querySelectorAll("button");

// for(btn of btns) {
//     btn.onclick = sayHello;
// }
// dom events onmouseenter
// for(btn of btns) {
//     btn.onmouseenter = function(){
//         console.log("you entered a button");
//     };
// }

// event listener
// btn.addEventListener("click",function(){
//     console.log("button clicked");
// });

// for (btn of btns) {
//     btn.onclick = sayHello;
//     btn.onclick = sayName;
// }
// function sayHello() {
//     alert("HELLO!");
// }
// function sayName() {
//     alert("TANZEEM!");
// }
// for(btn of btns) {
//     btn.addEventListener("click", sayHello);
//     btn.addEventListener("click", sayName);
//     };

// btn.addEventListener("dblclick",function() {
//     console.log("you double clicked me");
// });

// event listener on elements

// let p = document.querySelector("p");

// p.addEventListener("click",function(){
//     console.log("para was clciked");
// });

let box = document.querySelector(".box");

box.addEventListener("click",function() {
    console.log("box was clicked");
});

box.addEventListener("mouseenter",function() {
    console.log("mouse entered div");
});

box.addEventListener("dblclick",function() {
    console.log("box was double clicked");
});

// this in event listener
// let btn = document.querySelector("button");

// btn.addEventListener("click", function() {
//     console.dir(this);
//     console.dir(this.innerText);
//     console.dir(this.style.backgroundColor = "blue");
// });

let btn = document.querySelector("button");
let p = document.querySelector("p");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");

// btn.addEventListener("click", function(){
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// });

// p.addEventListener("click", function(){
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// });

// h1.addEventListener("click", function(){
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// });

// h3.addEventListener("click", function(){
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// });

// removes redunduncy
function changeColor() {
    console.dir(this.innerText);
    this.style.backgroundColor = "blue";
};
btn.addEventListener("click", changeColor);
p.addEventListener("click", changeColor);
h1.addEventListener("click", changeColor);
h3.addEventListener("click", changeColor);

// // keyboard events
// let btn2 = document.querySelector("button");

btn.addEventListener("click",function(event) {
    console.log("button clicked");
    console.log(event);
});

btn.addEventListener("dblclick",function(event) {
    console.log("button clicked");
    console.log(event);
});

let inp = document.querySelector("input");

inp.addEventListener("keydown", function(e) {
    console.log("key was pressed");
    console.log(e);
});

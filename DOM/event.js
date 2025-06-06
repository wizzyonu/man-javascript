//javascript30.com

function reveal(){
    const div = document.querySelector('.evt div');
    div.style.color = 'red';
    div.style.backgroundColor = 'blue';
    div.style.height = '100px';
    div.style.width = '100px';
}
//reveal();
const clickMe = document.querySelector(".evt button");
clickMe.onclick = reveal;

const hoverr = document.getElementsByTagName("h1")[0];
hoverr.onmouseover = function(){
    this.style.color = "black";
    
}
//using addEventListener
clickMe.addEventListener("click", reveal);

hoverr.addEventListener("mouseover", () =>{

    e.target.style.color = "green";
})
document.body.addEventListener("keydown", (e) =>{
    if(e.key === "e"){
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }
    if(e.key === "r"){
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
})

//Event Deligation
document.getElementsByClassName("section")[0].addEventListener("mouseleave", (e) =>{
    if(e.target.firstElementChild.tagName === "H3"){
        e.target.firstElementChild.style.color = "red";
    }
})

//working with form events
// document.getElementById("form").addEventListener("submit", (e) =>{
//     e.preventDefault();
//     const fullname = document.getElementById("fullname");
//     const email = document.getElementById("email");
//     const password = document.getElementById("password");
//     console.log(
//         `Fullname: ${fullname.value}, 
//         Email: ${email.value},
//          Password: ${password.value}`
//     );
// })

//using formData
const form = document.getElementById("form");
form.addEventListener("submit", (e) =>{
    e.preventDefault();
    const formData = new FormData(form);
    console.log(Object.fromEntries(formData));

    const span = document.createElement("span");
    span.innerHTML = '<em>password length too short</em>';
    span.style.color = "red";
    document.getElementById("password").after(span);
    document.getElementById("password").style.borderColor = "red";



})

document.getElementsByClassName("show")[0].addEventListener("click", (e) =>{
    if(document.getElementById("password").type === "password"){
        document.getElementById("password").type = "text";
        e.target.innerHTML = "X";

    }else {
        document.getElementById("password").type = "password";
        e.target.innerHTML = "O";
    }   

})

//common events
//Mouse events - click, dblclick, mouseover, mouseout, mousemove
//Keyboard events - keydown, keyup, keypress
//Form events - submit, change, focus, blur
//Window events - load, resize, scroll, unload
//Event Bubbling - when an event occurs on an element, it first runs the handler on it, then on its parent, and so on up to the DOM tree

//Assignment- build q Html, CSS, JS project on a TODO app
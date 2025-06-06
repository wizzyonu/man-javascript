//accessing text content of an element
//textContent
//innerText
//innerHTML

//textContent - returns the text content of an element and its descendants
console.log(document.getElementsByClassName("logo")[0].textContent); //get the text content of the first element with class name content
console.log(document.getElementsByTagName("ul")[0].textContent); //get the inner text of the first element with class name content

//innerText - returns the visible text content of an element and its descendants
console.log(document.getElementsByClassName("logo")[0].innerText); //get the text content of the first element with class name content

//innerHTML - returns the HTML content of an element and its descendants
console.log(document.getElementsByClassName("logo")[0].innerHTML); //get the HTML content of the first element with class name content
console.log(document.getElementsByTagName("ul")[0].innerHTML); //get the HTML content of the first element with class name content

//manipulating the DOM Elements
//changing content of an element
const logo = document.getElementsByClassName("logo")[0]; //get the first element with class name logo
logo.textContent = "Document <em>Object</em> Model"; //change the text content of the logo element
logo.innerText = "Document <em>Object</em> Model"; //change the inner text of the logo element
logo.innerHTML = "<h1>Document <em>Object</em> Model "; //change the inner HTML of the logo element

//changing attribute of an element
const logo2 = document.querySelector(".logo"); //get the first element with class name logo
logo2.id = "pyhon"; //change the id of the logo element
logo2.style. border = "2px solid red"; //change the border of the logo element
logo2.style.color = "red"; //change the color of the logo element
logo2.style.backgroundColor = "blue"; //change the background color of the logo element
logo2.style.padding = "10px"; //change the padding of the logo element
logo2.style = "border: 2px solid red; color: red; background-color: blue; padding: 10px;"; //change the style of the logo element

console.log(logo2.className); //get the class name of the logo element
console.log(logo2.id); //get the id of the logo element

//methods like setAttribute() and getAttribute()

console.log(logo2.getAttribute("class")); //get the class name of the logo element
console.log(logo2.getAttribute("style")); //get the id of the logo element

logo2.setAttribute("class", "logo2"); //set the class name of the logo element
logo2.setAttribute("style", "border: 2px solid red; color: red; background-color: blue; padding: 10px;"); //set the style of the logo element

console.log(logo2.hasAttribute("type")); //get the type of the logo element
logo2.setAttribute("data-turnon", "true"); //set the data-turnon attribute of the logo element
logo2.removeAttribute("data-turnon"); //remove the data-turnon attribute of the logo element

//manipulating class
const clas = document.getElementsByClassName("nav")[0]; //get the first element with class name nav
console.log(clas.classList); //get the class name of the nav element

//add class - remove class - toggle class 
clas.add("active"); //add the class active to the nav element
clas.remove("abc")

//manulating styles
const item = document.querySeclectorAll(".heading")[1]; //get the second element with class name heading
item.style.color = "red"; //change the color of the heading element 
item.style.fontSize = "20px"; //change the font size of the heading element
item.style.fontWeight = "bold"; //change the font weight of the heading element
item.style.textAlign = "center"; //change the text align of the heading element
item.style.textDecoration = "underline"; //change the text decoration of the heading element

//creating elements and removing elements
//<img src="" alt="">
const img = document.createElement("img"); //create an img element
const src = document.createAttribute("src"); //create a src attribute
src.value = "https://www.w3schools.com/images/w3schools_green.jpg"; //set the value of the src attribute
img.setAttributeNode(src); //set the src attribute of the img element
const alt = document.createAttribute("alt"); //create an alt attribute
alt.value = "W3Schools.com"; //set the value of the alt attribute
img.setAttributeNode(alt); //set the alt attribute of the img element
img.width = "100"; //set the width of the img element

console.log(img); //log the img element

//add element to the DOM
const body = document.body; //get the body element of the document
body.append(img); //add the img element to the body element
body.appendChild(img); //add the img element to the body element

//using insertBefore() method to add an element before another element
const section = document.querySelector(".section"); //get the first element with class name section
const cont = document.querySelector(".content"); //get the first element with class name content
section.insertBefore(img, cont); //insert the img element before the content element

//using before and after methods to add an element before and after another element
const section2 = document.querySelector(".section"); //get the first element with class name section
section2.before(img); //insert the img element before the section element

//removing elements
const section3 = document.querySelector(".section"); //get the first element with class name section

//section3.remove(); //remove the section element
const cont2 = document.querySelector(".content"); //get the first element with class name content
cont2.parentNode.removeChild(document.querySelector(".heading")); //remove the heading element


//clone elements
const section4 = document.querySelector(".section"); //get the first element with class name section
const clone = section4.cloneNode(true); //clone the section element
console.log(clone); //log the cloned element
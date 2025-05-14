//Accessing DOM elements
//1. getElementByTagName()
//2. getElementById()
//3. getElementsByClassName()
//4. querySelector()
//5. querySelectorAll()

//getElementByTagName()-> returns a live HTMLCollection of elements with the given tag name
const elements = document.getElementsByTagName("p"); //get all p elements
console.log(elements); //HTMLCollection(3) [p, p, p]

const header1 = document.getElementsByTagName("header"); //get all header elements
console.log(header1); //HTMLCollection(1) [header]

//getElementsByClassName()-> returns a live HTMLCollection of elements with the given class name
const elements2 = document.getElementsByClassName("content"); //get all elements with class name content
console.log(elements2); //HTMLCollection(1) [div.content]

const content1 = document.getElementsByClassName("content1"); //get all elements with class name content1

//getElementById()-> returns the first element with the given id
const element = document.getElementById("item1"); //get the element with id item1
console.log(element); //div#item1

//querySelector()-> returns the first element that matches the given CSS selector
const element2 = document.querySelector(".main p"); //get the first p element inside the main element
console.log(element2); //p.main

const element3 = document.querySelector("#item1"); //get the element with id item1
console.log(element3); //div#item1


//querySelectorAll()-> returns a static NodeList of elements that match the given CSS selecton
const elements3 = document.querySelectorAll(".main p"); //get all p elements inside the main element
console.log(elements3); //NodeList(3) [p.main, p.main, p.main]

const elements4 = document.querySelectorAll("#item1"); //get all elements with id item1
console.log(elements4); //NodeList(1) [div#item1]
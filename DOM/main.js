documents.write("Hello World");

//Traversing the DOM
//getting the main children of the document and title
const head = document.head; // get the head element of the document
const title = document.title; // get the title of the document
const body = document.body; // get the body element of the document

console.log(title); // log the title of the document

//childnodes
const nodes = document.body.childNodes; // get all child nodes of the document
console.log(nodes); // log all child nodes of the document

//children
const children = document.body.children; // get all children of the document
console.log(children); // log all children of the document

//firstChild (lastchild)
const firstChild = document.body.firstChild; // get the first child of the document
console.log(firstChild); // log the first child of the document

//firstElementChild (lastElementChild)
const firstElementChild = document.body.firstElementChild; // get the first element child of the document
console.log(firstElementChild); // log the first element child of the document

//exercise1
console.log(document.body.firstElementChild.firstElementChild); // get the first element child of the first element child of the document body
console.log(document.body.childNodes[1].childNodes[1]); // get the first child of the first child of the document body

//parentNode
const parentNode = document.body.parentNode; // get the parent node of the document body
console.log(parentNode); // log the parent node of the document body

//parentElement
const parentElement = document.body.parentElement; // get the parent element of the document body
console.log(parentElement); // log the parent element of the document body

//previousSibling (nextSibling)
const previousSibling = document.body.previousSibling; // get the previous sibling of the document body
console.log(previousSibling); // log the previous sibling of the document body

//previousElementSibling (nextElementSibling)
const previousElementSibling = document.body.previousElementSibling; // get the previous element sibling of the document body
console.log(previousElementSibling); // log the previous element sibling of the document body

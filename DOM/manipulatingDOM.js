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
//Srting in javascript
//String is a primitive data type in javascript
//String is a sequence of characters
//String is imutable

//string is created using single quotes, double quotes or backticks
let str1 = 'Hello World';//single quotes
let str2 = "Hello World";//double quotes
let str3 = `Hello World`;//backticks

//string is created using String constructor
let str4 = new String('Hello World');//String constructor

//string is created using String object
let str5 = new String('Hello World');//String object

//concatenation pf strings
let str6 = 'Hello' + ' ' + 'World';//concatenation of strings
let str7 = str1.concat(' ', str2);//concatenation using concat method
let str8 = `${str1} ${str2}`;//concatenation using template literals

//template literals
//template literals are enclosed in backticks
//template literals can contain placeholders
//placeholders are enclosed in ${}
let name = 'John';
let age = 30;
let str9 = `My name is ${name} and I am ${age} years old`;//template literals
console.log(str9);//My name is John and I am 30 years old

//String properties and methods
//String length 
//String length is the number of characters in a string
let str10 = 'Hello World';
console.log(str10.length);//11

// toUpperCase() method
let str11 = str10.toUpperCase();//toUpperCase() method
console.log(str11);//HELLO WORLD

//startsWith() method
let str12 = str10.startsWith('Hello');//startsWith() method
console.log(str12);//true

//includes() method
let str13 = "The quick brown fox jumps over the lazy dog";
let str14 = str13.includes('quick');//includes() method
console.log(str14);//true

//access string characters
let str15 = 'Hello World';
console.log(str15[0]);//H
console.log(str15[1]);//e
console.log(str15[2]);//l
console.log(str15[3]);//l
console.log(str15[4]);//o
console.log(str15[19]);//undefined

let str16 = 'Hello World';
console.log(str16[0] + str16[7] + str16[2] + str16[str16.length - 1]);//Hold

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





//practical questions solvings
//lenght of a string
let str = 'Hello World';
console.log(str.length)//11

//converting to uppercase
let word = "javascript";
console.log(word.toUpperCase());//JAVASCRIPT

//Getting the first character of a string
let aka = "Alice";
console.log(aka.charAt(0));//A


//Getting the last character of a string
let mma = "coding" ;
console.log(mma.charAt(mma.length - 1));//g


//combining two strings
 str1 = "Helllo";
 str2 = "World";
 console.log(`${str1} ${str2}`);//Hello World

//Find the position of a substring
str1 = "I love JavaScript";
console.log(str1.indexOf("love"));//2


//Extract a part of a string
str1 = "Hello World";
console.log(str1.slice(6, 11));//World


//Replace part of a string
let sentence = "I like cats";
console.log(sentence.replace("cats", "dogs"));//I like dogs

//Check if a string includes a substring
let mum = "programming";
console.log(mum.includes("gram"));//true


//Split a string into an array
let str17 = "apple,banana,cherry";
console.log(str17.split(","));//["apple", "banana", "cherry"]


//Remove whitespace from the start/end
let input = " trim me ";
console.log(input.trim());//trim me

//Repeat a string
let mum2 = "ha";
console.log(mum2.repeat(4));//hahahaha

//Get a substring from a string
str = "JavaScript";
console.log(str.substring(0, 4));//Java

//Convert a string to lowercase
let str18 = "HELLO WORLD";
console.log(str18.toLowerCase());//hello world

//Check if a string starts with a character
let word2 = "apple";
console.log(word2.startsWith("a"));//true

//Extract the middle character of a string
word = "coding";
console.log(word.slice(2,4));//di

//Mask the first half of a string
let password = "secret";
let halfLength = Math.floor(password.length / 2); // 3 for "secret"
let maskedPassword = "*".repeat(halfLength) + password.slice(halfLength);
console.log(maskedPassword); // "***ret"


//Count how many times a letter appears
let str19 = "banana";
console.log(str19.split("a").length - 1);//3

//Reverse a short string manually
let str20 = "hello";
console.log(str20.split("").reverse().join(""));//olleh


//Concatenate with template literals
let name1 = "Alice";
let age1 = 25;
console.log(`My name is ${name1} and I am ${age1} years old`);//My name is Alice and I am 25 years old
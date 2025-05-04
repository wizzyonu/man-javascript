// control flow in Javascript
// The decision making statements
/**
 * If statement - The if statement executes a block of code if the condition is true.
 * If else statement - The if else statement executes a block of code if the condition is true, otherwise it executes another block of code.
 * else if statement - The else if statement executes a block of code if the condition is true, otherwise it executes another block of code.
 * switch statement - The switch statement executes a block of code depending on the value of a variable.
 * tenary operator - The ternary operator is a shorthand for the if else statement. It takes three operands, a condition, a value if the condition is true, and a value if the condition is false.
 */


/***
 * if statement
 * Syntax:
 * if (condition) {
 *   // code to be executed if condition is true
 * }
 */
let sum = 10;
if (sum > 5) {
  console.log("sum is greater than 5");
}

/**
 * The else statement
 * Syntax:
 * if (condition) {
 *   // code to be executed if condition is true
 * } else {
 *   // code to be executed if condition is false
 * }
 */
let sum1 = 10;

if (sum1 > 5) {
  console.log("sum is greater than 5");
} else {
  console.log("sum is less than or equal to 5");
}

/**
 * else if statement
 * Syntax:
 * if (condition1) {
 *  // code to be executed if condition1 is true
 * } else if (condition2) {
 *   // code to be executed if condition2 is true
 * } 
 * ***
 * else {
 *  // code to be executed if condition1 and condition2 are false
 * }
 * 
 */

let sum2 = 10;
if (sum2 > 5) {
  console.log("sum is greater than 5");
} else if (sum2 < 5) {
  console.log("sum is less than 5");
} else {
  console.log("sum is equal to 5");
}

/**
 * The switch statement
 * syntax:
 * switch (expression) {
 *   case value1:
 *    // code to be executed if expression is equal to value1
 *   break;
 *  case value2:
 *   // code to be executed if expression is equal to value2
 *  break;
 * default:
 *   // code to be executed if expression is not equal to any of the values
 * }
 */

let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
};

let grade = 45;
switch (true) {
  case grade >= 90:
    console.log("A");
    break;
  case grade >= 80:
    console.log("B");
    break;
  case grade >= 70:
    console.log("C");
    break;
  case grade >= 60:
    console.log("D");
    break;
  case grade >= 50:
    console.log("E");
    break;
  case grade >= 40:
    console.log("E");
    break;
  default:
    console.log("F");
};

/**
 * The ternary operator
 * syntax:
 * condition ? True : false
 * condition1 ? condition2 ? true : false : false
 * condition1 ? true : condition2 ? true : false
 */
let age = 18;
let result = age > 5 ? 'age is greater than 5' : 'age is not less than  5';
console.log(result); //age is greater than 5

let age2 = 5;
let result2 = age2 > 5 ? 'age is greater than 5' : age2 < 5 ? 'age is less than 5' : 'age is equal to 5';
console.log(result2); //age is equal to 5


//let's simmulate nested if statement by biuild a login logic
// let user = {
//     username: "john",
//     password: "1234",
// }
// // let user_name = prompt("Enter your username: ");
// // let pass_word = prompt("Enter your password: ");

// if (user_name === user.username) {
//     if (pass_word.toLowerCase() === user.password.toLowerCase()) {
//         console.log("Login successful");
//     } else {
//         console.log("Invalid password");
//     }
// } else {
//     console.log("Invalid username");
// }


//falsey value 0, "", null, undefined, false

let  isloggedIn  = true;
let role = "editor"

if(isloggedIn){
    if (role === "admin") {
        console.log("Admin Dashboard");
    } else if (role === "editor") {
        console.log("Editor's Dashboard");
    } else {
        console.log("user Dashboard");
    }
} else {
    console.log("Please login")
}

//Write a program that checks if a number is positive, negative, or zero.
let number = -5;
if (number > 0) {
    console.log("The number is positive");
} else if(number < 0 ){
  console.log("The number is negative");
}else {
  console,log("The number is zero");
}

//Check if a number is even or odd.
number = 23;

if (number % 2 === 0 ){ 
  console.log("Its an Even number")
}else{
  console.log("Its an odd number ");
}

//Print "Hello" if a variable is truthy, otherwise print "Goodbye"
let web = ""

if(web){
  console.log("Hello");
}else{
  console.log("Goodbye")
}

//Check if a number is greater than 100, greater than 50, or small.
number = 120;
if (number > 100) {
    console.log("The number is greater than 100");
}else{
  console.log("the number is greater than or less")
}

//Check if a string is empty.
let asa = "Micale";
if (asa.length === 0) {
    console.log("The string is empty");
}else {
  console.log("The string is full")
}

//Given a day
day = "monday";

switch (true) {
  case day === "monday":
    console.log("WeekDay");
    break;
  case day === "tuesday":
    console.log("WeekDay");
    break;
  case day === "wednesday":
    console.log("WeekDay");
    break;
  case day === "thursday":
    console.log("WeekDay");
    break;
  case day === "friday":
    console.log("WeekDay");
    break;
  case day === "saturday":
    console.log("weekend");
    break;
  default:
    console.log("Invalid day");

}

//Check if a person (age stored in a variable) can vote (age >= 18).
 age = 20;
if (age >= 18) {
    console.log("You can vote");
} else if (age < 18) {
    console.log("You cannot vote");
} else{
  console.log("Invalid age");
}


//Check if a password (stored in a variable) has at least 8 characters.
let password = "Enuguonu12";
if (password.length >= 8) {
    console.log("Password is valid");
}else if (password.length < 8) {
    console.log("Password is invalid");
} else{
  console.log("Invalid password")
}

//Check if a number is divisible by both 3 and 5
let num = 15;
if (num % 3 === 0 && num % 5 === 0) {
    console.log("The number is divisible by both 3 and 5");
}else if (num % 3 === 0) {
    console.log("The number is divisible by 3 only");
} else if (num % 5 === 0) {
    console.log("The number is divisible by 5 only");
} else {
    console.log("The number is not divisible by both 3 and 5");
}

//Given a temperature, print "Freezing" (<=0), "Cold" (<=10), "Warm" (<=20), or "Hot".
let temperature = 15;
if (temperature <= 0) {
    console.log("Freezing");
} else if (temperature <= 10) {
    console.log("Cold");
}
else if (temperature <= 20) {
    console.log("Warm");
} else {
    console.log("Hot");
}

//Check if a year (stored in a variable) is a leap year.
let year = 2020;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log("The year is a leap year");
}else {
    console.log("The year is not a leap year");
}

//Given a number (1-7), print the corresponding day ("Sunday" for 1, etc.).
let dayNumber = 3;
switch (dayNumber) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid day number");
}

//Find the largest of three numbers (stored in variables a, b, c).
let a = 10;
let b = 20; 
let c = 30;
if (a > b && a > c) {
    console.log("a is the largest number");
}
else if (b > a && b > c) {
    console.log("b is the largest number");
} else if (c > a && c > b) {
    console.log("c is the largest number");
} else {
    console.log("All numbers are equal");
} 

//Check if a word (e.g., "madam") is a palindrome (same forwards/backwards).
let word = "madam";
let reversedWord = word.split("").reverse().join("");
if (word === reversedWord) {
    console.log("The word is a palindrome");
} else {
    console.log("The word is not a palindrome");
}

//imulate a traffic light: "red" → "stop", "yellow" → "ready", "green" → "go".
let trafficLight = "red";
switch (true) {
  case "red" === trafficLight:
    console.log("Stop");
    break;
  case "yellow" === trafficLight:
    console.log("Ready");
    break;
  case "green"  === trafficLight:
    console.log("Go");
    break;
  default:
    console.log("Invalid traffic light color");
}

//Categorize a person’s age: child (<13), teen (13-19), adult (20-64), senior (65+).
age = 20;
if (age < 13) {
    console.log("Child");
} else if (age >= 13 && age <= 19) {
    console.log("Teen");
} else if (age >= 20 && age <= 64) {
    console.log("Adult");
}
else if (age >= 65) {
    console.log("Senior");
} else {
    console.log("Invalid age");
}

//FizzBuzz: If a number is divisible by 3, print "Fizz"; by 5, print "Buzz"; by both, "FizzBuzz"; else print the number.
let fizzBuzzNumber = 15;
if (fizzBuzzNumber % 3 === 0 && fizzBuzzNumber % 5 === 0) {
    console.log("FizzBuzz");
} else if (fizzBuzzNumber % 3 === 0) {
    console.log("Fizz");
} else if (fizzBuzzNumber % 5 === 0) {
    console.log("Buzz");
}else {
    console.log(fizzBuzzNumber);
}


//Check if a number is prime (only divisible by 1 and itself)
 num = 23;
if (num === 2 || num === 3 || num === 5 || num === 7) {
    console.log("Prime");
} else if (num % 2 === 0 || num % 3 === 0 || num <= 1) {
    console.log("Not prime");
} else {
    console.log("Might be prime");
}

//Given a month number (1-12), print its days (ignore leap years).
let month = 2;
let daysInMonth;
switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    daysInMonth = 31;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    daysInMonth = 30;
    break;
  case 2:
    daysInMonth = "28 or 29";
    break;
  default:
    daysInMonth = "Invalid month number";
}

console.log(daysInMonth);

//Grade a student’s marks (A: 90+, B: 80+, etc.)
let marks = 95;
if (marks >= 90) {
    console.log("A");
} else if (marks >= 80) {
    console.log("B");
} else if (marks >= 70) {
    console.log("C");
} else if (marks >= 60) {
    console.log("D");
} else if (marks >= 50) {
    console.log("E");
} else {
    console.log("F");
}



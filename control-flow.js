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
let user = {
    username: "john",
    password: "1234",
}
let user_name = prompt("Enter your username: ");
let pass_word = prompt("Enter your password: ");

if (user_name === user.username) {
    if (pass_word.toLowerCase() === user.password.toLowerCase()) {
        console.log("Login successful");
    } else {
        console.log("Invalid password");
    }
} else {
    console.log("Invalid username");
}


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



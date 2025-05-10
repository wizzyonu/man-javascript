//function - Functions are resuable blocks of code that can be called when needed for a specific task.

/***
 * functions
 * syntax:
 * function functionName(parameters) {
 *   // code to be executed
 * }
 */

function add2() {
  console.log(3 + 2);
}

add2();

function add(a, b) {
  console.log(a + b);
}

add(3, 3);
add(10, 9);

function greet(name) {
  console.log(`Hello ${name}!`);
}
greet();

console.log("=--------------");

//it called parameters while defining the function
//it called arguments while calling the function

//default parameters
function greet(name = "Guest") {
  console.log(`Hello,  ${name}!`);
}

greet(); // Output Hello, Guest

greet("michael"); // Output Hello, Michael

//return statement
function add2(a, b) {
  return a + b;
}

let res = add2(3, 2); //Output: 11
console.log(res);

//create a function that reyurns the 4th charaters

function getFourthCharacters(str) {
  if (str.length >= 4) {
    return str.charAt(3);
  } else {
    return "string is too short";
  }
}

console.log(getFourthCharacters("Hello"));

//create a function that takes in an array and return last element of the array

function arrays(arr) {
  return arr[arr.length - 1];
}
var peace = arrays([1, 2, 3]);
console.log(peace);

//Annonymous function - this is a function that does not have a name. it is often used as a callback function or when you want to create a function on the fly.

let splitString = function (str) {
  return str.split("");
};

let splitResult = splitString("hello world");
console.log(splitResult); //Output: ["Hello", "World"]

//callback function - a function that is passed as an argument to another function and is executed after the completion of that function.

function processArray(arr, callback) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}
function square(num) {
  return num * num;
}

let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = processArray(numbers, square);
console.log(squaredNumbers); //Output: [1, 4, 9, 16, 25]

//arrow functiom - a shorter syntax for writing function expressions.
// it is often used when you want to create a function on the fly or when you want to create a function that does not have its own this value.
// syntax: (parameters) => { // code to be executed }
let sub = function (a, b) {
  return a - b;
};
console.log(sub(5, 2)); //Output: 3

let sum2 = (a, b) => a + b; //shorter syntax for writing function expressions
console.log(sum2(5, 2)); //Output: 7

//function to calculate tax and total price
function calculateTotal(item, taxrate) {
  const subtotal = item.reduce(
    (acc, current) => acc + current.price * current.quantity,
    0
  );
  const tax = subtotal * taxrate;
  const total = subtotal + tax;
  return {
    "Total Before Tax": subtotal,
    Tax: tax,
    "Total After Tax": total,
  };
}
const purchase = [
  { item: "apple", price: 2000, quantity: 2 },
  { item: "banana", price: 4000, quantity: 3 },
  { item: "orange", price: 3000, quantity: 1 },
  { item: "mango", price: 5000, quantity: 4 },
  { item: "grape", price: 6000, quantity: 2 },
];
const taka = calculateTotal(purchase, 0.15);
console.log(taka); //Output: {Total Before Tax: 2000, Tax: 300, Total After Tax: 2300}

//Basic Function Declaration
function greet(name) {
  return `KEllo ${name}`;
}
console.log(greet("Michael")); //Output: KEllo Michael

//Function with Multiple Parameters
function add(a, g) {
  return a + g;
}
console.log(add(2, 3)); //Output: 5

//Default Parameters
function greet(name = "Guest") {
  return `Hello ${name}`;
}
console.log(greet()); //Output: Hello Guest

//Anonymous Function (Function Expression)
let added = function (a, b) {
  return a + b;
};
console.log(added(2, 3)); //Output: 5

//Arrow Function
let bastard = (a, b) => {
  return a + b;
};
console.log(add(2, 3)); //Output: 5

//Function Returning Boolean
function isEven(pepesi) {
  return pepesi % 2 === 0;
}
console.log(isEven(4)); //Output: true

//Function Inside Function (Helper Function)
function square(num) {
  return num * num;
}
function squareAndAdd(length, width) {
  return square(length) * square(width);
}
console.log(squareAndAdd(2, 3)); //Output: 36

//Simple Callback Function
function doTwice(callback) {
  return callback() + callback();
}
function sayHello() {
  return "Hello!";
}
console.log(doTwice(sayHello)); //Output: Hello!Hello!

//Higher-Order Function (Simple)
function multiplyBy(fat) {
  return function (num) {
    // or: return (num) => num * fat;
    return num * fat;
  };
}
console.log(multiplyBy(2)(3)); // Output: 6

//Rest Parameters
function sum(...numbers) {
  return numbers.reduce((acc, current) => acc + current, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // Output: 15

//Closure Example
function outerFunction() {
  let count = 0;
  return function innerFunction() {
    count++;
    return count;
  };
}
const counter = outerFunction();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2

//Recursive Function
let factorial = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};
console.log(factorial(5)); //Output: 120

//IIFE (Immediately Invoked Function Expression)
let run = function () {
  console.log("I am running!");
};
run(); //Output: I am running!

//Function Currying
let factor = (a) => {
  return (b) => {
    return a * b;
  };
};

//Memoization (Caching)
factorial = (function () {
  let cache = {};
  return function (n) {
    if (n in cache) {
      return cache[n];
    } else {
      if (n === 0 || n === 1) {
        return 1;
      } else {
        cache[n] = n * factorial(n - 1);
        return cache[n];
      }
    }
  };
})(factorial);
//console.log(factorial(5)); //Output: 120

//Function Binding (this context)
const person = {
  name: "Michael",
  age: 30,
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

// Bind `person` to `greet` to ensure `this` refers to `person`
const boundGreet = person.greet.bind(person);
boundGreet(); // Output: "Hello, Michael!"

//Callback with Delay (setTimeout)
// Callback function that returns a greeting
function greetName(name) {
    return `Hello, ${name}!`;
  }
  
  // Delayed function that executes the callback after 2 seconds
  const delayedGreet = (callback) => {
    setTimeout(() => {
      const result = callback("Wizzy"); // Call the callback with "Wizzy"
      console.log(result); // Log the result
    }, 2000);
  };
  
  // Test
  delayedGreet(greetName); // After 2 seconds: logs "Hello, Wizzy!"

//Function Composition
const compose = (f, g) => (x) => f(g(x));

//Error Handling in Function

function divide(a, b) {
    try {
      if (b === 0) {
        throw new Error("Division by zero is not allowed.");
      }
      const result = a / b;
      return result;
    } catch (error) {
      console.error("An error occurred:", error.message);
      // You can rethrow the error or return a default value
      // throw error;
      return null; // or return 0 or handle it as needed
    }
  }
  
  // Test the function
  const divisionResult = divide(10, 0);
  console.log("Result:", divisionResult);

//Generators (Basic)
function countUpTo(){
    let count = 0;
    return {
        next: function(){
            count++;
            return count;
        }
    }
}



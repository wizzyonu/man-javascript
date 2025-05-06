//loops in javascript
// Loops are block of code that are executed repeatedly until a certain condition is met. Javascript has 3 types of loops:
// 1. for loop
// 2. while loop
// 3. do while loop

/**
 * Types of loops in javascript
 * 1. for loop
 * 2. while loop
 * 3. do while loop
 * 4. for...in loop - works with object
 * 5. for...of loop - works with arrays and
 */

/** 1. while loop
 * The 'while' loop executes a block of code as long as the specified condition is true.
 * Syntax:
 * while (condition) {
 *  // code to be executed
 * }
 *
 */
let i = 0;
while (i < 5) {
  console.log(i); // prints 0, 1, 2, 3, 4
  i++;
}
console.log("--------------------------");

let j = 5;
while (j >= 5) {
  console.log(j); // prints 5, 4, 3, 2, 1
  j--;
}
console.log("--------------------------");

let ps = 10;
while (ps <= 20) {
  console.log(ps); // prints 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
  ps++;
}
console.log("--------------------------");

/**
 * 2. do while loop
 * The 'do...while'
 * syntax:
 * do{
 *    //code to br executed
 * }while (condition )
 */
let jk = 0;
do {
  console.log(jk);
  jk++;
} while (jk < 5);
// output 0,1,2,3,4
console.log("--------------------------");

let jj = 5;
do {
  console.log(jj);
  jj++;
} while (jj < 0);

console.log("--------------------------");

let jjj = 0;
do {
  console.log(jjj);
  jjj += 2;
} while (jjj <= 20);
//
console.log("--------------------------");
/**
 * 3. for loop
 * The 'for' loop is used when you know in advance how many times you want to execute a statment or a block of code.
 * syntax:
 * for (initialization; condition; increment/decrement){
 *     //code to be executed
 * }
 */
for (let k = 0; k < 5; k++) {
  console.log(k);
}

// for (let kk = 10; kk > 1; kk--){
//     console.log(kk);
// }
 console.log("--------------------------");
 for (let k = 20; k > 0; k--) {
   console.log(k);
 }

console.log("--------------------------");

let arr = [19, 200, 3, 47, 5, 13, 14, 15, 16, 17, 18];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[1]);
}
console.log("--------------------------");

let fruits = ["apple", "banana", "cherry", "date", "fig", "grape"];

for (let i = 0; i < fruits.length; i++) {
  if (fruits[i].includes("a")) {
    console.log(fruits[1]);
  }
}
console.log("--------------------------");

for (let i = 0; i < fruits.length; i++) {
  if (fruits[i] === "cherry") {
    break;
  }
  console.log(fruits[i]);
}

console.log("--------------------------");

console.log("--------------------------");
//working with nested loops

let nestedArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let flat = [];
for (let i = 0; i < nestedArr.length; i++) {
  for (let j = 0; j < nestedArr[i].length; j++) {
    flat.push(nestedArr[i][j]);
  }
}
console.log(flat);
console.log("--------------------------");

// FizzBuzz implementation
for(let i = 1; i <= 100; i++) {
  if(i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if(i % 3 === 0) {
    console.log("Fizz");
  } else if(i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

console.log("--------------------------");
/**
 * 4. for...in loop
 * The 'for...in' loop is used to iterate over the properties of an object.
 * It is not recommended to use for...in loop for arrays as it may not iterate in the order you expect.
 * Syntax:
 * for (variable in object) {
 *  // code to be executed
 * }
 */

let person = {
  name: "John",
  age: 30,
  city: "New York",
};

for (let key in person) {
  console.log(key); // prints name, age, city
  console.log(person[key]); // prints John, 30, New York
  console.log(`${key}: ${person[key]}`); // prints name: John, age: 30, city: New York
}
console.log("--------------------------");

// for (let i = 0; i < objects .length; i++) {
//   console.log(fruits[i]); // prints apple, banana, cherry, date, fig, grape
// }
// console.log("--------------------------");

/**
 * 5. for...of loop
 * The 'for...of' loop is used to iterate over iterable objects like arrays, strings, maps, sets, etc.
 * It is not recommended to use for...of loop for objects as it will not work.
 * Syntax:
 * for (variable of iterable) {
 *  // code to be executed
 * }
 */

let iterable = ['apple', 'banana', 'cherry', 'date', 'fig', 'grape'];

for (let value of iterable) {
  console.log(value); // prints apple, banana, cherry, date, fig, grape
}
console.log("--------------------------");

//example with object that has array as value as a property
let obj = {
  name: "John",
  age: 30,
  hobbies: ["reading", "gaming", "coding"],
};

for (let hobby of obj.hobbies) {
  console.log(hobby); // prints reading, gaming, coding
}
console.log("--------------------------");


//Study and practice the following problems:
//Print Numbers 1 to 10
for (let i = 1; i<=10; i++) {
  console.log(i); // prints 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
}
console.log("--------------------------");

//Print Even Numbers from 1 to 20
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i); // prints 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
  }
}
console.log("--------------------------");

//Sum of Numbers from 1 to 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i; // sum = 1 + 2 + 3 + ... + 100
}
console.log(sum); // prints 5050
console.log("--------------------------");

//Print Multiplication Table (5 x 10)
for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`); // prints 5 x 1 = 5, 5 x 2 = 10, ..., 5 x 10 = 50
}
console.log("--------------------------");

//Reverse a String Using a Loop
let str = "Hello World";
let reversedStr = "";
for (let i = str.length - 1; i >= 0; i--) {
  reversedStr += str[i]; // appending characters in reverse order
}
console.log(reversedStr); // prints dlroW olleH
console.log("--------------------------");

//Find the Factorial of a Number
let num = 5;
let factorial = 1;
for (let i = 1; i <= num; i++) {
  factorial *= i; // factorial = 1 * 2 * 3 * ... * num
}
console.log(factorial); // prints 120 (5! = 5 * 4 * 3 * 2 * 1)
console.log("--------------------------");


//Count Vowels in a String
let str2 = "Javascript is awesome!";
let vowels = "aeiouAEIOU";
for(let i = 0; i <= str2.length; i++){
  if(vowels.includes(str2[i])){
    console.log(str2[i]); // prints a, i, a, e, o, e
  }
}
console.log("--------------------------");


//Print a Pyramid Pattern
let rows = 5;
for (let i = 1; i <= rows; i++) {
  let str = " ".repeat(rows - i) + "*".repeat(2 * i - 1);
  console.log(str); // prints pyramid pattern
}
console.log("--------------------------");

//Find the Largest Number in an Array
let numbers = [3, 5, 7, 2, 8, 1, 4];
let large = numbers[0]; // assume first number is the largest
for(i = 0; i <numbers.length; i++){
  if(numbers[i] > large){
    large = numbers[i] // find the largest number
  }
}
console.log(large); // prints 8
console.log("--------------------------");

//Check if a Number is Prime
let num2 = 29;
let isPrime = true;

// Check for divisors from 2 to sqrt(num2)
for (let i = 2; i <= Math.floor(Math.sqrt(num2)); i++) {
  if (num2 % i === 0) {  // Fix: Check divisibility by 'i', not 1
    isPrime = false;     // Not a prime number
    break;
  }
}

// Final check outside the loop
if (isPrime) {
  console.log(num2 + " is a prime number");
} else {
  console.log(num2 + " is not a prime number");
}
console.log("--------------------------");

//Fibonacci Series up to N Terms
let n = 10;
let a = 0, b = 1, c;
for(let i = 0; i <= n; i++){
  console.log(a);
  c = a + b;
  a = b;
  b = c;

}
console.log("--------------------------");

//Remove Duplicates from an Array
let arr2 = [1, 2, 2, 3, 4, 4];
let uniqueArr = [];
for (let i = 0; i < arr2.length; i++){
  if(!uniqueArr.includes(arr2[i])){
    uniqueArr.push(arr2[i]);
  }
}
console.log(uniqueArr);
console.log("--------------------------");

//Find the Second Largest Number in an Array
let arr3 = [3, 5, 7, 2, 8, 1, 4];
let largest = arr3[0];
let secondLargest = arr3[0];
for (let i = 0; i < arr3.length; i++) {
  if (arr3[i] > largest) {
    secondLargest = largest;
    largest = arr3[i];
  } else if (arr3[i] > secondLargest && arr3[i] !== largest) {
    secondLargest = arr3[i];
  }
  console.log(secondLargest);

}
console.log("--------------------------");

//Print All Prime Numbers in a Range (1-50)
for (let i = 1; i <= 50; i++) {
  let isPrime = true;
  if (i < 2) {
    continue; // Skip numbers less than 2
  }
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      isPrime = false; // Not a prime number
      break;
    }
  }
  if (isPrime) {
    console.log(i); // prints prime numbers between 1 and 50
  }
}
console.log("--------------------------");

//Flatten a Nested Array
let nestedArray = [[1, 2], [3, 4], [5, 6]];
let flatArray = [];
for (let i = 0; i < nestedArray.length; i++) {
  for (let j = 0; j < nestedArray[i].length; j++) {
    flatArray.push(nestedArray[i][j]); // flattening the array
  }
}
console.log(flatArray); // prints [1, 2, 3, 4, 5, 6]  
console.log("--------------------------");

//Count Occurrences of Each Character in a String
let str3 = "hello world";
let charCount = {};
for (let i = 0; i < str3.length; i++) {
  let char = str3[i];
  if (charCount[char]) {
    charCount[char]++; // increment count if character already exists
  } else {
    charCount[char] = 1; // initialize count to 1 if character is new
  }
}
console.log(charCount); // prints { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }
console.log("--------------------------");

//Find the Longest Word in a String
let str4 = "The quick brown fox jumps over the lazy dog";
let words = str4.split(" ");
let longestWord = "";
for (let i = 0; i < words.length; i++) {
  if (words[i].length > longestWord.length) {
    longestWord = words[i]; // find the longest word
  }
}
console.log(longestWord); // prints "jumps"
console.log("--------------------------");

//Generate a Chessboard Pattern
let size = 8;
let chessboard = "";
for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    if ((i + j) % 2 === 0) {
      chessboard += "X"; // print X for even sum of indices
    } else {
      chessboard += "O"; // print O for odd sum of indices
    }
  }
  chessboard += "\n"; // new line after each row
}
console.log(chessboard); // prints chessboard pattern
console.log("--------------------------");

//Bubble Sort Implementation
let arr4 = [5, 3, 8, 4, 2];
let n2 = arr4.length;
for (let i = 0; i < n2 - 1; i++) {
  for (let j =  0; j < n2 - i - 1; j++) {
    if (arr4[j] > arr4[j + 1]) {
      // swap arr4[j] and arr4[j + 1]
      let temp = arr4[j];
      arr4[j] = arr4[j + 1];
      arr4[j + 1] = temp;
    }
  }
}
console.log(arr4); // prints [2, 3, 4, 5, 8]
console.log("--------------------------");

//Print a Diamond Pattern
let diamondRows = 5;
for (let i = 1; i <= diamondRows; i++) {
  let str = " ".repeat(diamondRows - i) + "*".repeat(2 * i - 1);
  console.log(str); // prints upper half of diamond
}
for (let i = diamondRows - 1; i >= 1; i--) {
  let str = " ".repeat(diamondRows - i) + "*".repeat(2 * i - 1);
  console.log(str); // prints lower half of diamond
}
console.log("--------------------------");
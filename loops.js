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

for (let i = 0; i < objects .length; i++) {
  console.log(fruits[i]); // prints apple, banana, cherry, date, fig, grape
}
console.log("--------------------------");

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
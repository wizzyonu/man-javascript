//Array in JavaScript
//1. Array declaration
//2. Array Accessing
//3. Accessing array elements
//4. Array length
//5. Array methods
//6. Array Iteration
//7. Array Destructuring
//8. Array Spread Operator

//Array is a collection of elements
//Array is a data structure that can hold multiple values
//Array is a data type that can hold multiple values

//Array Delaration
let arr = new Array(); //empty array
let arr1 = []; //empty array using literal
let arr2 = ["a", "b", "c"]; //array with values
let arr3 = [1, "a", true, null]; //array with mixed values
let arr4 = [1, 2, 3, [4, 5]]; //array with nested array
let arr5 = [1, 2, 3,] ; //array with numbers

let arr6 = new Array(5); //array with 5 undefined values
let arr7 = new Array("a", "b", "c"); //array with 3 values
let arr8 = new Array(1, "a", 2, 3); //array with 3 values
let arr9 = new Array(1, 2, 3, [4, 5]); //array with nested array
let arr10 = new Array(1, 2, 3, 4, 5); //array with 5 values


//2. accessing array elements
let arr11 = [1, 2, 3, 4, 5]; //array with 5 values
console.log(arr11[0]); //1
console.log(arr11[1]); //2

//3. Array length
let arr12 = [1, 2, 3, 4, 5]; //array with 5 values
console.log(arr12.length); //5

//4. Array Indexing
let arr13 = [1, 2, 3, 4, 5]; //array with 5 values
console.log(arr13[0]); //1

//5. array methods
//-push() add element to end of array
let arr14 = [1, 2, 3, 4, 5]; //array with 5 values
arr14.push(6); //add 6 to end of array
console.log(arr14); //[1, 2, 3, 4, 5, 6]

//-pop() remove element from end of array
let arr15 = [1, 2, 3, 4, 5]; //array with 5 values
let lastElement = arr15.pop(); //remove last element from array
console.log(arr15); //[1, 2, 3, 4]
console.log(lastElement); //5

//unshift() add element to beginning of array
let arr16 = [1, 2, 3, 4, 5]; //array with 5 values
arr16.unshift(0); //add 0 to beginning of array
console.log(arr16); //[0, 1, 2, 3, 4, 5]

//shift() remove element from beginning of array
let arr17 = [1, 2, 3, 4, 5]; //array with 5 values
let firstElement = arr17.shift(); //remove first element from array
console.log(arr17); //[2, 3, 4, 5]
console.log(firstElement); //1

//-splice() add or remove element from array at specific index
let arr18 = [1, 2, 3, 4, 5]; //array with 5 values
arr18.splice(2, 0, 6); //add 6 at index 2
console.log(arr18); //[1, 2, 6, 3, 4, 5]
arr18.splice(2, 1); //remove element at index 2
console.log(arr18); //[1, 2, 3, 4, 5]

//-slice() return a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
let arr19 = [1, 2, 3, 4, 5]; //array with 5 values
let newArr = arr19.slice(1, 3); //return a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
console.log(newArr); //[2, 3]

//-join() join all elements of an array into a string
let arr20 = [1, 2, 3, 4, 5]; //array with 5 values
let str = arr20.join(", "); //join all elements of an array into a string
console.log(str); //1, 2, 3, 4, 5

let bumbum = "hello world from javascript";
let bat = bumbum.split(""); //split string into array of words
console.log(bat); //["hello", "world", "from", "javascript"]
bat [0] = "j"; //change first letter to uppercase
console.log(bat); //["jello", "world", "from", "javascript"]

const arr00 = [
    'apple',
    true,
    '55',
    null,
    [45,67,'book'],
    {name : "john doe", age : 54},

]
console.log(arr00.length); //apple9
console.log(arr00[2]); //55
console.log(arr00[4][2]); //book
console.log(arr00[5].name); //john doe
console.log(arr00[5].age); //54

//advancded array methods
//-map() creates a new array populated with the results of calling a provided function on every element in the calling array.
let numbers = [1, 2, 3, 4, 5]; //array with 5 values

//using for loop to raise to power 2
let numto = [] //empty array
for (let i = 0; i < numbers.length; i++){
    numto.push(Math.pow(numbers[i], 2)); //raise to power 2
}
console.log(numto); //[1, 4, 9, 16, 25]

//using map() to raise to power 2
const raiseto2 = num =>{
    return Math.pow(num, 2); //raise to power 2
}
let numto2 = numbers.map(raiseto2); //using map() to raise to power 2
console.log(numto2); //[1, 4, 9, 16, 25]

const numto3 = numbers.map(num => Math.pow(num, 2)); //using map() to raise to power 2
console.log(numto3); //[1, 4, 9, 16, 25]


//-filter() creates a new array with all elements that pass the test implemented by the provided function.
let filtered = numbers.filter(num => num % 2 === 0); //create a new array with all elements that pass the test implemented by the provided function.
console.log(filtered); //[2, 4]

//Arrays of 10 objects
 arr22 = [
    {name : "john doe", age : 54, status : "active"},
    {name : "jane doe", age : 34, status : "inactive"},
    {name : "jane doe", age : 34, status : "inactive"},
    {name : "jane doe", age : 34, status : "inactive"},
    {name : "james doe", age : 24, status : "active"},
    {name : "jane doe", age : 34, status : "inactive"},
    {name : "jake doe", age : 44, status : "active"},
    {name : "jill doe", age : 14, status : "inactive"},
    {name : "josh doe", age : 64, status : "active"},
    {name : "jerry doe", age : 74, status : "inactive"},
    
]
const gt50 = arr21.filter(obj => obj.age > 50); //create a new array with all elements that pass the test implemented by the provided function.
console.log(gt50); //[{name : "john doe", age : 54, status : "active"},{name : "jerry doe", age : 74, status : "inactive"}]

const active = arr21.filter(obj => obj.status === "active"); //create a new array with all elements that pass the test implemented by the provided function.

//-reduce() executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue; //return sum of all elements in array
}, 0); //initial value of accumulator is 0
console.log(sum); //15

//forEach() executes a provided function once for each array element.
numbers.forEach((element,index) => {
    console.log(`Element at index ${index} is ${element}`); //print element at index
});







//solvings
//Create an array of your favorite fruits and print it.
let fruits = ["apple", "banana", "orange", "mango", "grape"];
console.log(fruits); //["apple", "banana", "orange", "mango", "grape"]

//Access the second element in the array
let papa = [10, 20, 30, 40, 50];
console.log(papa[1]); //20


//Find the length of the array
papa = [10, 20, 30, 40, 50];
console.log(papa.lenght); //5

//Add "grape" to the end of the array 
fruits = ["apple", "banana", ];
fruits.push("grape"); //add grape to end of array
console.log(fruits); //["apple", "banana", "grape"]

// Remove the last element from
papa = [10, 20, 30, 40, 50];
papa.pop(); //remove last element from array
console.log(papa); //[10, 20, 30, 40]

//Check if "orange" exists in the array
fruits = ["apple", "banana", "orange", "mango", "grape"];
console.log(fruits.includes("orange")); //true

// Combine two arrays
let arr21 = [1, 2, 3];
let arr22 = [4, 5, 6];
let combinedArr = arr21.concat(arr22); //combine two arrays
console.log(combinedArr); //[1, 2, 3, 4, 5, 6]

// Find the index of "banana" 
fruits = ["apple", "banana", "orange", "mango", "grape"];
console.log(fruits.indexOf("banana")); //1


//Reverse the array
let arr23 = [1, 2, 3, 4, 5];
console.log(arr23.reverse()); //[5, 4, 3, 2, 1]

// Convert the array
fruits = ["apple", "banana", "orange", "mango", "grape"];
let str1 = fruits.join(", "); //convert array to string
console.log(str1); //apple, banana, orange, mango, grape

// Sum all numbers in [1, 2, 3, 4, 5]
arr23 =  [1, 2, 3, 4, 5];

console.log(arr23.reduce((a, b) => a + b)); //15

//Filter out even numbers from [1, 2, 3, 4, 5]
arr23 = [1, 2, 3, 4, 5];
console.log(arr23.filter(num => num % 2 !== 0)); //[1, 3, 5]

//Map each number in [1, 2, 3, 4, 5] to its square
arr23 = [1, 2, 3, 4, 5];
console.log(arr23.map(num => num * num)); //[1, 4, 9, 16, 25]

//Check if all numbers in [10, 20, 30] are greater than 5.
arr23 = [10, 20, 30];
console.log(arr23.every(num => num > 5)); //true

// Find the first number greater than 10 in [5, 8, 12, 4, 20]
arr23 = [5, 8, 12, 4, 20];
console.log(arr23.find(num=> number > 10)); //12

//Remove the first element from ["a", "b", "c"]
let arr24 = ["a", "b", "c"];
arr24.shift(); //remove first element from array
console.log(arr24); //["b", "c"]

//Add "x" to the beginning of ["y", "z"]

let arr25 = ["y", "z"];
arr25.unshift("x"); //add x to beginning of array
console.log(arr25); //["x", "y", "z"]

//. Sort [3, 1, 4, 2] in ascending order.
let arr26 = [3, 1, 4, 2];
console.log(arr26.sort((a, b) => a - b)); //[1, 2, 3, 4]

//Remove elements from index 1 to 2 in ["a", "b", "c", "d"]
let arr27 = ["a", "b", "c", "d"];
console.log(arr27.splice(1, 2)); //["b", "c"]

// Flatten a nested array [[1, 2], [3, 4], [5]] into a single array.
let arr28 = [[1, 2], [3, 4], [5]];
console.log(arr28.flat()); //[1, 2, 3, 4, 5]


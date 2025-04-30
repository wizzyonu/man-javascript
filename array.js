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
bat(0) = "j"; //change first letter to uppercase
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
console.log(arr00[4][2]); 
console.log(arr00[5].name); //john doe
console.log(arr00[5].age); //54
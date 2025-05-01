//function - Functions are resuable blocks of code that can be called when needed for a specific task.

/***
 * functions
 * syntax:
 * function functionName(parameters) {
 *   // code to be executed
 * }
 */

function add2(){
    console.log(3 + 2);
}

add2();

function add (a, b){
    console.log(a + b);
}

add(3, 3);
add(10, 9);


function greet (name){
    console.log(`Hello ${name}!`)
}
greet();

console.log("=--------------")

//it called parameters while defining the function
//it called arguments while calling the function

//default parameters
function greet (name = 'Guest'){
    console.log(`Hello,  ${name}!`)
}

greet();// Output Hello, Guest

greet('michael')// Output Hello, Michael

//return statement
function add2(a, b){
    return a + b;
}

let res = add2(3, 2); //Output: 11
console.log(res)

//create a function that reyurns the 4th charaters

function getFourthCharacters(str){
    if (str.length >= 4){
        return str.charAt(3);

    }else {
        return "string is too short";
    }
}

console.log







//create a function that takes in an array and return last element of the array

function arrays (arr){
    return arr[arr.length - 1];
}
var peace = arrays([1, 2,3]);
console.log(peace)

//Annonymous function - this is a function that does not have a name. it is often used as a callback function or when you want to create a function on the fly.

let splitString = function (str){
    return str.split('');
}

let result = splitString('hello world');
console.log(result); //Output: ["Hello", "World"]

//callback function - a function that is passed as an argument to another function and is executed after the completion of that function.

function processArray(arr, callback){
    let result = [];
    for (let i = 0; i < arr.length; i++){
        result.push(callback(arr[i]));
    }
    return result;
}
function square(num){
    return num * num;
}

let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = processArray(numbers, square);
console.log(squaredNumbers); //Output: [1, 4, 9, 16, 25]





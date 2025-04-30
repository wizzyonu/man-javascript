//obeject in javascript
// object is a collection of key-value pairs
// object is a data structure that can hold multiple values
//obeject is a key-value pair
//obeject is a refrence type

//creating an object
// object can be created using object literal
let obj = {}; //empty object

let obj1 = {
  name: "John",
  age: 30,
  isStudent: false,
  status: "active",
}; //object with values

let obj2 = {
  name: "John",
  age: 30,
  isStudent: false,
  status: "active",
  hobbies: ["reading", "writing", "coding"], //array inside object
}; //object with properties and array

let obj3 = {
  name: "John",
  age: 30,
  isStudent: false,
  status: "active",
    "favourite Color": "blue", //space in property name
  hobbies: ["reading", "writing", "coding"],
  address: {
    //object inside object
    city: "New York",
    state: "NY",
    country: "USA",
  },
}; //object with properties and nested object

//object can be created using object constructor
let obj4 = new Object(); //empty object using constructor
let obj5 = new Object({
  name: "John",
  age: 30,
  isStudent: false,
  status: "active",
}); //object with values using constructor

//Accessing object properties
//object properties can be accessed using dot notation or bracket notation
console.log(obj3.name); //John
console.log(obj3.status); //active
console.log(obj3.address.city); //New York); //30
console.log(obj3.isStudent); //false)
//to get the favourite color with dot notation will cause an error
//console.log(obj3.favourite color); //SyntaxError: Unexpected token

//object properties can be accessed using bracket notation
console.log(obj3["name"]); //John
console.log(obj3["status"]); //active
console.log(obj3["address"]["city"]); //New York
console.log(obj3["isStudent"]); //false
console.log(obj3["favourite color"]); //blue
console.log(obj3["hobbies"][0]); //reading
console.log(obj3["hobbies"][1]); //writing

//object properties can be accessed using bracket notation with variable
let prop = "name";
console.log(obj3[prop]); //John


//adding property to an object
obj3.username = "john546";
obj3["phone number"] = 2333435545;
console.log(obj3);

//object methods
const keys = Object.keys(obj3); //get keys of object
console.log(keys); //["name", "age", "isStudent", "status", "favourite Color", "hobbies", "address"]

const val = Object.values(obj3); //get values of object
console.log(val); //["John", 30, false, "active", "blue", Array(3), Object]

const keys2 = Object.keys(obj3["address"]); //get keys of object inside object
console.log(keys2); //["city", "state", "country"]

//object.entries() returns an array of key-value pairs
const entries = Object.entries(obj3); //get key-value pairs of object
console.log(entries); //[["name", "John"], ["age", 30], ["isStudent", false], ["status", "active"], ["favourite Color", "blue"], ["hobbies", Array(3)], ["address", Object]]

//object.assign() copies the values of all enumerable own properties from one or more source objects to a target object
const target = { a: 1 };
const source = { b: 2, c: 3 };
const source2 = { d: 4, e: 5 };
const source3 = {f: 6, g: 7 };

const result = Object.assign(target, source, source2, source3); //copy values of source to target
console.log(result); //{a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7}
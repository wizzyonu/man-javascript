//Datatypes in javascript
/**
 * number - int and float and double
 * BigInt - Bigger int and bigger float
 * String
 * boolean
 * undefined
 * null
 * object - derived datatype
 * symbol
 */

//to check the datatype of a value or variables, user the property "typeof"

//number
let num = 20;
let num1 = 66.3;
console.log(typeof num);
console.log(typeof num1);

//BigInt
//there are 2 ways to create a BigInt, using the bigint objects or add 'n' to a number
let bignum = BigInt(59);
console.log(typeof bignum);

//obeject
let user = {
  name: "John Doe",
  age: 30,
  isStudent: false,
};
console.log(typeof user);

//symbol
let sym = Symbol("unique");
console.log(typeof sym);
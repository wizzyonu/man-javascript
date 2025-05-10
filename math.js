//Math properties
console.log(Math.PI); //3.141592653589793
console.log(Math.E); //2.718281828459045

console.log(Math.abs(-5)); //5
console.log(Math.pow(2, 3)); //8
console.log(Math.max(2, 3, 4, 5)); //5
console.log(Math.min(2, 3, 4, 5)); //2

console.log(Math.round(4.5)); //5
console.log(Math.floor(4.5)); //4
console.log(Math.ceil(4.5)); //5

console.log("trunc: " + Math.trunc); //4

console.log(Math.random()); //random number between 0 and 1

//Math.floor(Math.random() * max) + 1; //random number between 0 and 9
console.log(Math.floor(Math.random() * 10) + 1); //random number between 0 and 9
console.log(Math.floor(Math.random() * 100) + 1); //random number between 0 and 99

//Math.floor(Math.random() * (max - min ) + min) + 1; //random number between min and max
console.log(Math.floor(Math.random() * (100 - 50) + 50)); //random number between 50 and 100

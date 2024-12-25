// premitive data types

// there are 7
// * String
// * Number
// * Boolean
// * null
// * undefined
// * Symbol
// * BigInt

// is js dynamic typed or static typed?
// ANSWER :- JavaScript is a dynamically typed language, which means that data types of variables are 
// determined by the value they hold at runtime and can change throughout the program as we assign different 
// values to them. for example as follows

let score = 100
let ScoreValue = 100.45

const isLoggedIn = false
const outsideTemp = null

let usedEmail;


const id = Symbol('12345')
const anotherId = Symbol('12345')
// console.log(id === anotherId);

// Reference type or non premitive
// array , object , functions

// Array
const arrayHeros = ["batman", "ironman", "spiderman"]

// // object
// {
//     Name : yogi
//     age : 24

// }


const myFunction = function () {
    console.log("hello world");

}



console.log(typeof arrayHeros);
console.log(typeof myFunction);

// to study :- https://tc39.es/ecma262/#sec-ecmascript-data-types-and-values



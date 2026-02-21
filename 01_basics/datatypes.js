"use script"; // to use new version of JS

// alert( 3 + 3) // we are using node JS not browser
 
let age = 18

/*

numbers => 2 to power 53
boolean
string
null =>standalone value
undefined
symbol

object

*/

console.log(typeof age);

// typeof null => object
// typeof undefined => undefined 



// ****************Data types Summary****************

// Primitive

// 7 types => String, Number, Boolean, Null, undefined, Symbol, BigInt

let id = Symbol('123')
let anotherId = Symbol('123')
console.log(id === anotherId)
// Reference (Non Primitive)

// Arrays, Objects, Functions

const numbers = ["12", "32"]
let myObj = {
    name : "Mayank",
    age : 18
}
const myFun = function(){
    console.log("hello");

}

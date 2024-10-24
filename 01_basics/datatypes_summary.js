// Primitive
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

// Reference(Non-Primitive)
// Array, Objects, Functions

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const heros = ['Shaktiman', 'Naagraj', "Doga"];

let myObj = {
    name: "sujal",
    age: "21",
}

const myFunction = function(){
    console.log("Hello World!");
}

console.log(typeof heros)
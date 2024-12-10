// Primitive
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

// Reference(Non-Primitive)
// Array, Objects, Functions

// Javascript - Statically or Dynamically typed?

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

// Stack (Primitive), Heap (Non-Primitive)

let myName = "Sujal"
let anotherName = myName

anotherName = "Tony"

// console.log(myName);
// console.log(anotherName);

let user1 = {
    email: 'hello@email.com',
    upi: '738838@upi'
}

let user2 = user1

user2.email = 'bonjour@email.com'

console.log(user1.email)
console.log(user2.email)

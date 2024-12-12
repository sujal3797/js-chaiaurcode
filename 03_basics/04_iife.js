// Immediately Invoked Function Expressions
// 1. Jo function immediately execute ho jaye
// 2. Global scope ke pollution ko remove krne ke liye by creating a private scope for variables and functions

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`)
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`)
})('sujal');
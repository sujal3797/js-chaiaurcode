const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, Welcome to website`);
        console.log(this);
    }
    
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

/* 
Browser ke andar global object window hai
*/

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = () => {
//     let username = "hitesh"
//     console.log(this);
// }

// chai()

// const addTwo = (num1,, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3,4))

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)
// console.log(addTwo(3,4))

const addTwo = (num1, num2) => ({username: "sujal"})
console.log(addTwo(2,3));

// const myArray = [2,5,3,7,8]
// myArray.forEach(() => {})
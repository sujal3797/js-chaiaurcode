const tinderUser = new Object() //Singleton 
const tinderUser2 = {} //Not-Singleton

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

const regularUser = {
    email: "someone@gmail.com",
    fullname: {
        userfullname: {
            firstname: "sujal",
            lastname: "gupta"
        }
    }
}

// console.log(regularUser.fullname.userfullname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3: "A", 4: "B"}

// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "hello@mail.com"
    },
    {
        id: 2,
        email: "some@mail.com"
    }
]

// console.log(users[1].email);

// console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'))
// Singleton
// Object.create

// Object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Sujal",
    "full name": "Sujal Gupta",
    [mySym]: "mykey1",
    age: "21",
    location: "Delhi",
    email: "sujal@google.com",
    isLoggedin: false,
    lastLoginDays: ["Monday", "Saturday"],
}

// console.log(JsUser.location);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "sujal@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "sujal@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello Js User");
}

JsUser.greetingTwo = function() {
    console.log(`Hello, ${this["full name"]}`);
}

JsUser.greetingTwo();
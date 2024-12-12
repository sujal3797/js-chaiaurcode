const userEmail = "h@hitesh.ai"

if(userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function(){}

// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10 //assigns 2nd value if first is null or undefined

let val2 = null ?? 15
console.log(val2);

//Ternary Operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice > 80 ? console.log("more than 80") : console.log("less than 80")
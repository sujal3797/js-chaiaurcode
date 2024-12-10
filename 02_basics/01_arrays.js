// Arrays

// Copies - Shallow copy (same reference) & Deep copy

const myArr = [0, 1, 2, 3, 4, 5]
// console.log(myArr[1]);

const myHeros = ["Shaktiman", "Naagraj"]

// Array Methods
myArr.push(6);
// console.log(myArr);

myArr.unshift(9); //starting me push karta hai
// console.log(myArr);
myArr.shift(); //starting se pop karta hai
// console.log(myArr.includes(8));

const newArr = myArr.join();
// console.log(newArr); //typeof - string

/* Difference in Slice and Splice
1. Splice me end range include hoti hai slice me nahi
2. Splice original array ko hi alter kar deta hai while in case of slice original array remains same
*/

console.log("A", JSON.stringify(myArr));
const myn1 = myArr.slice(1,3);
console.log(myn1);
console.log("B", JSON.stringify(myArr));

const myn2 = myArr.splice(1,3);
console.log("C", JSON.stringify(myArr));
console.log(myn2);
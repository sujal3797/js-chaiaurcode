// Arrays

const myArr = [0, 1, 2, 3, 4, 5]
// console.log(myArr[1]);

const myHeros = ["Shaktiman", "Naagraj"]

// Array Methods
myArr.push(6);
// console.log(myArr);

myArr.unshift(9);
// console.log(myArr);
myArr.shift();
// console.log(myArr.includes(8));

const newArr = myArr.join();
// console.log(newArr);

console.log("A", JSON.stringify(myArr));
const myn1 = myArr.slice(1,3);
console.log(myn1);
console.log("B", JSON.stringify(myArr));

const myn2 = myArr.splice(1,3);
console.log("C", JSON.stringify(myArr));
console.log(myn2);
const name = "  sujal  "
const repoCount = 50

// console.log(name + " " + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Hello, Sujal')
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('j'));

const newString = gameName.substring(0,4)
// console.log(newString);

const  anotherString = gameName.slice(-8,4)
// console.log(anotherString);

console.log(name.trim());
console.log(gameName.split(","));

const url = "https:/sujalgupta%20company.com"
console.log(url.replace('%20', '-'));

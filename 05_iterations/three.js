// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1,2,3,4,5]

// for (const num of arr) {
//     console.log(num);
// }

const greetings = "Hello world!"

// for (const char of greetings) {
//     console.log(char);
// }

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "America")
map.set('FR', "France")

// console.log(map);

// for (const [key, value] of map) {
//     console.log(key)
// }

// const myObj = {
//     'game1': 'NFS',
//     'game2': 'Spiderman'
// }

// for (const [key, value] of myObj) {
//     console.log(key) //this iterative method doesn't work for objects.
// }

const myObj = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObj) {
    // console.log(`${key} -> ${myObj[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const num in programming) {
    console.log(programming[num]);
}
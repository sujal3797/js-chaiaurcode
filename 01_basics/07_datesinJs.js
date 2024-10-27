// Dates

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toISOString());

let newDate = new Date(2023, 0, 23, 5, 3);
// console.log(newDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(Math.floor(Date.now()/1000));

console.log(newDate.toLocaleDateString('default', {
    weekday: "long",
}));
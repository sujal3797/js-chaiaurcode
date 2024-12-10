console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true

/*
The reason is that an equality check == and comparisons <,>,<=,>= work differently.
Comparisons convert null to a number treating it as 0. That's why (3) null >= 0 is true while (1) null > 0 is false.
*/

// === strict check, datatype should also be same
// console.log("2"===2);

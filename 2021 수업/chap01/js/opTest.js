'use strict'

let num; // undefined

console.log(null == num);               // true
console.log(null === num);              // false
console.log(null > 0);                  // false
console.log(null == 0);                 // false
console.log(null === 0);                // false
console.log(null >= 0);                 // true
console.log(0 == false);                // true

console.log(5 > 4);                     // true
console.log("apple" > "pineapple");     // false
console.log("2" > "12");                // true
console.log(num == null);               // true
console.log(num === null);              // false
console.log(null == "\n0\n");           // false
console.log(null === +"\n0\n");         // false

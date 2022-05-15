'use strict';
console.log(typeof undefined); // undefined
console.log(typeof 0); // number
console.log(typeof 10); // number
console.log(typeof true); // boolean
console.log(typeof "foo"); // String
console.log(typeof Symbol("id")); // symbol
console.log(typeof Math); // object
console.log(typeof null); // object
console.log(typeof alert); // undefined
console.log(typeof prompt); // undefined

let testName = "mirim";
console.log(`Hello ${1}`);  // heelo 1
console.log(`hello ${"testName"}`); // hello testname
console.log(`hello ${testName}`);   // hello mirim

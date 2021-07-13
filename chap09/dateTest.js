"use strict";

let now = new Date();                                   // 현재시각
console.log(now);

let date1970101 = new Date(0);                          // 1970.01.01   
console.log(date1970101); 

let date19700102 = new Date(24*60*60*1000);             // 1970.01.02
console.log(date19700102);

let someday = new Date("July, 5, 2012");
console.log(someday);
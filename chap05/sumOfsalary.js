"use strict";

let employee = {
    aaa : 150,
    bbb : 120,
    ccc : 180
};

let sum = 0;
for(let key in employee){
    sum += employee[key];

};

console.log("합 : "+sum);
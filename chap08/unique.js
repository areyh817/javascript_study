"use strict";

function unique(arr){
    let s = new Set();
    
    return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", "0"];

console.log(unique(values));
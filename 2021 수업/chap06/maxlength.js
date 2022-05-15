"use strict";

let str = "Where there is a will there is a way";
let maxlength;

function trucate(str, maxlength){
    return str.slice(0, maxlength) + "...";
}

console.log(trucate(str, 15));
"use strict";

let arr = [5, 2, 4, -9, 34];

function compareND(a, b){
    if(a < b) return 1;
    if(a == b) return 0;
    if(a > b) return -1;
}

arr.sort(compareND);
console.log(arr);
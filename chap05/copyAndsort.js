"use strict";

let arr = [5, 2, 4, -9, 34];

let arr2 = arr.slice();

function compareND(a, b){
    if(a < b) return 1;
    if(a == b) return 0;
    if(a > b) return -1;
}

arr2.sort(compareND);
console.log(arr2);
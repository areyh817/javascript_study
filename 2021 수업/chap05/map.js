"use strict";

let arr_length = ["aaa", "bbbbbb", "cccccccc"];

let fn = function(item, index, array){
    return item.length;
};

console.log(arr_length.map(fn));
"use strict";

let str = "john";

function First(str){
    return str[0].toUpperCase()+str.slice(1);
}
console.log(First(str));
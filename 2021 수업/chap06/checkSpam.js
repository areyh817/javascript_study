"use strict";

let str = "free xXx";
function checkSpam(str){

    
    if(str.includes("XXX")) return true;
    else if(str.includes("xxx")) return true;
    else return false;
}

console.log(checkSpam(str));
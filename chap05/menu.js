'use strict';

let menu = {
    hamburger : 5000,
    potato : 1000,
    cola : 1000,
    option : "선택"
};

function multiply(menu){
    for(let key in menu){
        if(typeof menu[key] == "number"){
            menu[key] *= 2;
        }   
    }
};

multiply(menu);
function printMenu(menu){
    for(let key in menu){
        console.log(key + " : "+menu[key]);
    }
};

printMenu(menu);

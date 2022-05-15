"use strict";

function suminput(){
    let arr = [];
    let sum = 0;
    let num = 0;

    for(;;){
        num = prompt("숫자를 입력하세요");
        if(num == null || num == ''){
            break;
        } else {
            arr.push(num);
        }
    }
    for(let value of arr){
        sum += Number(value);

    }
    return sum;
};

alert(suminput());
"use strict";

function readNumber(){
    for(;;){
        let num = prompt("숫자를 입력하세요");
        if(!isNaN(num)){
            return +(num);
            break;
        } else if(num == null){
            return null;
            +num;
            break;
        }
    }
};

alert(readNumber());
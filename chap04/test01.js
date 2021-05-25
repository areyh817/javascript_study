'use strict'

function checkAge(a){
    if(a >= 18){
        return true;
    } else {
       return confirm("재인증 부탁드립니다.");
        
    }
}
let age = prompt("나이를 입력하세요");
checkAge(age);

function getMin(i, j){
    if(i > j){
        return alert(j);
    } else {
        return alert(i);
    }
}

let a = Number(prompt("수를 입력하세요 "));
let b = Number(prompt("수를 입력하세요"));
getMin(a, b);

function getPow(num1, num2){
    let res = 1;
    for(let m = 1; m <= num2; m++){
            res *= num1;
    }
    return alert(res);
}

getPow(a, b);
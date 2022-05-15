'use strict';

let age = 17; // 전역변수

let year = prompt("년도 입력");

function checkAge(){
    if(year == 2022){
        age++;
    } else if(!year){
        alert("올바른 년도 입력");
    } else {
        age += (year - 2021);
    }
}

checkAge();

if(age  >= 18){
    alert("성년입니다.");
} 
alert(`당신의 나이 : ${age}`);
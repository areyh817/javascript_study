"use strict";


function getSecodsToday(){
    let now = new Date();   // 현재 시간으로 객체 생성
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    let difference = now - today;   // 밀리초의 차이
    
    return Math.round(difference/1000);
}

console.log(getSecodsToday());


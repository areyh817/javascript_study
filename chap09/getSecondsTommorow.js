"use strict";


function getSecodsTomorrow(){
    let now = new Date();   // 현재 시간으로 객체 생성
    // 오늘 0시 0분으로 객체 생성
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);

    let difference = tomorrow - now;   // 밀리초의 차이
    
    return Math.round(difference/1000);
}

console.log(getSecodsTomorrow());


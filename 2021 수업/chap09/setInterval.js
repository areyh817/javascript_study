"use strict";


// 시계 (초)

setInterval(function(){

    let today = new Date();
    
    let days = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일", "일요일"];

    let month = today.getMonth();           // 달
    let date = today.getDate();             // 날짜
    let day = days[today.getDay()];         // 요일
    let hour = today.getHours();            // 시
    let minute = today.getMinutes();        // 분
    let seconds = today.getSeconds();       // 초

    minute = minute < 10 ? "0" + minute : minute;           // 00분, 01분, 02분 맞춰주기
    seconds = seconds < 10 ? "0" + seconds : seconds;       // 00초, 01초, 02초 맞춰주기


    //  벡틱으로 출력해주기
    let now = `${month}월 ${date}일 ${day} ${hour}시 ${minute}분 ${seconds}초`;
    console.log(now);

}, 1000);

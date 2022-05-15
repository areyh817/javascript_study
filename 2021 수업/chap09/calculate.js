"use strict";

function calculate(){

    // 구입날짜
    let bdate = new Date(2021, 1, 1);
    // 오늘날짜
    let today = new Date();
    
    let difference = today = bdate;
    difference = Math.floor(difference / 24 * 60 *60 * 1000); // ceil, round, floor 
    // 날짜를 계산할 때는 floor가 와야한다.

    // 30일이 지났는지 안 지났는지 판별
    if(difference > 30){
        console.log("교환 불가");
    } else console.log("교환 가능");
}

calculate();
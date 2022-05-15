'use strict';

setValue(10, 20);

function setValue(one, two){        // 선언함수
    let total = one + two;
    console.log(total);
}

function showMessage(from){
    console.log(from);
}

showMessage("홍길동");

function showMessage2(from, text = "환영합니다."){       // 오버라이
    console.log(from + text);
}

showMessage2("홍길동");

function showCount(count){
    console.log(count?? "unkown");
}
showCount();

function getPoint(){
    return 10 * 20;
}
let result = getPoint();

console.log(result);
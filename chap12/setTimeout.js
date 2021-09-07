"use strict";

function sayHi(){
    console.log('안녕하세요.');
}

setTimeout(sayHi, 2000);    // 밀리초 5초 후에

function sayHiname(who, phrase){
    console.log(who+"님, "+phrase);
}

setTimeout(sayHiname, 3000, "홍길동", "안녕하세요.");

// sayHello를 2초 뒤에 실행한다.
let st1 = setTimeout(function sayHello(){
    console.log("안녕하세요 !");
}, 2000);
st1;

clearTimeout(st1);
"use strict";

alert("Hello");
window.alert("Hi");

var gVar = 5;   // 자바스크립트 엔진이 윈도우객체에 내부적으로 프로퍼티 생성 => 이름과 동일 충돌
// static 효과 => 모던 자바스크립트 X
alert(window.gVar); 


// 중요한 변수여서 모든 함수가 접근 가능한 변수를 선언하고 싶은 경우
window.currentUser={  // static 효과를 낼 수있다.
    name:"John"
};

let currentUser = "Pete";
alert(currentUser); // Peter
alert(currentUser.name);
alert(window.currentUser.name); // John
'use strict';

let age = prompt("나이 입력");

if(age < 18){
    function welcome(){ // 특정한 코드 블럭 안에 정의 되어있는 함수 => 코드 블럭 밖에서 
        alert("청소년입니다. 환영합니다.");
    }
} else {
    function welcome(){
        alert("성인입니다. 환영합니다.");
    }
}

welcome();
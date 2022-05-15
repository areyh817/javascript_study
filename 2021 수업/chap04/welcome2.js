'use strict';
/*
let age = prompt("나이 입력");
let welcome;

if(age < 18){
    welcome = function(){ // 특정한 코드 블럭 안에 정의 되어있는 함수 => 특정한 코드블록에 함수를 선언하면 호출해봤자 영향끼치지 못함
        alert("청소년입니다. 환영합니다.");
    }
} else {
    welcome = function(){
        alert("성인입니다. 환영합니다.");
    }
}

welcome();
*/

let age = prompt("나이를 입력해주세요", 18);
let welcome = (age < 18) ?
    function() { alert("안녕!"); }
    function() { alert("안녕하세요 !"); };
welcome()
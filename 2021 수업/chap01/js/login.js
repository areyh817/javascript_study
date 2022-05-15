'use strict'

let id, pw;
id = prompt("아이디를 입력하세요 : "); 

if(id == "admin"){
    pw = prompt("비밀번호를 입력하세요");
    if(pw == 1234){
        alert("환영");
    } else {
        alert("인증 실패 !");
    }
} else {
    alert("아이디 오류 !");
}

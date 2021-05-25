'use strict';

function ask(question, yes, no){        // semantic => 콜백함수
    if(confirm(question)) yes();
    else no();
}
function showOk(){
    alert("동의하셨습니다.");
}
function showNo(){
    alert("동의하지 않았습니다.");
}
ask("동의하십니까?", showOk, showNo);
'use strict';

function ask(question, yes, no){        // semantic => 콜백함수
    if(confirm(question)) yes();
    else no();
}

ask(
    "동의하십니까??",
    () => alert("동의했음"),
    () => alert("동의 안 했음")
);

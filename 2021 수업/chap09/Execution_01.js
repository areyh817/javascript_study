"use strict";

let x = 'xxx';  // 전역변수

function test(){    // 선언함수
    let y = 'yyy';

    function bar(){ // 선언함수
        let z = 'zzz';
        alert(x + y + z);
    }
    bar();
}
test();
// 실행시 두개의 실행 컨텍스트를 생성

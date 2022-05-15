"use strict";

// 재귀란 함수가 자기 자신을 호출하는 것을 의미
// 재귀함수를 이용한 제곱프로그램
function pow(x, n){
    if(n == 1) return x;
    else return x * pow(x, n - 1);
}

console.log(pow(2, 3));
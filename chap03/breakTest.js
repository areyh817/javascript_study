'use strict';

let sum = 0;
let num;
while(1){
    num = prompt("숫자를 입력하세요");
    sum += Number(num);
    if(!num) break;
}
alert(sum);
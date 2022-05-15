"use strict";


let me = {

    firstName = "홍",
    lastName = "길동",

    introduce(){
        console.log(`My name is ${this.firstName} ${this.lastName} 입니다.`);
    }
}

me.introduce();

setTimeout(function(){
    me.introduce();
}, 1000);

setTimeout(()=> me.introduce(), 1000);

me = {
    introduce(){
        console.log("hello");
    }
}

// bind : 모든 함수는 this를 수정하게 하는 내장 method bind를 제공
// let boundFunc = func.bind(context);
// bind는 함수 func의 this를 context로 고정한다.
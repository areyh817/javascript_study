"use strict";

let calculator = {
    read(){
        this.num1 = +prompt("숫자를 입력하세요");
        this.num2 = +prompt("숫자를 입력하세요");
    },
    sum(){
        return (this.num1 + this.num2);
    },
    mul(){
        return (this.num1 * this.num2);
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
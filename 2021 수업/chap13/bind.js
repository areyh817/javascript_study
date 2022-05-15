"use strict";

let user = {
    firstName : "길동",
    lastName : "홍"
};

function func1(){
    console.log(this.lastName + this.firstName);
}

function func2(p){
    console.log(p +", " +this.lastName + this.firstName);
}

let funcUser1 = func1.bind(user);
funcUser1();

let funcUser2 = func2.bind2(user);
funcUser2("Hello");

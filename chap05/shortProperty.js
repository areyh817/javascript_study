"use strict";

// 생성자 메서드
/*function makeUser(name, age){
    return{
        name : name,    // this.name = name (JAVA에선)
        age : age       // this.age = age
    };
}*/

function makeUser(name, age){
    return{
        name,    // this.name = name (JAVA에선)
        age       // this.age = age
    };
}

let name = prompt("이름 입력 : ");
let age = prompt("나이 입력 ");

let user = makeUser(name, age);
alert(user.name);
alert(user.age);

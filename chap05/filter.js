"use strict";

let employee = [
    {id:1, name:"홍길동"},
    {id:2, name:"나미림"},
    {id:3, name:"엄복동"},
    {id:3, name:"신림동"}
];

// id값으로 name 검색
// 함수 표현 방식

let fn = function(item, index, employee){
    return item.id == 3;
};

console.log(employee.filter(fn));

// 화살표 함수
let result = employee.filter((item, index, employee) => item.id == 3);  // 배열의 탐색 메서드 filter
let result = employee.filter((item, index, employee) => item.id == 3);  // 배열의 탐색 메서드 filter
console.log(result);

// 신림동 찾는 화살표 함수
let res = employee.filter((item, index, employee) => item.name == "신림동");
console.log(res);
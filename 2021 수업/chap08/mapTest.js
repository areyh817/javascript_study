"use strict";


let recipMap = new Map([
    ["cucumber", 500],
    ["tomato", 350],
    ["onion", 50]
]);

// for of를 지원한다
// recipMap의 key값
for(let vegetable of recipMap.keys()){
    console.log(vegetable);
}
console.log();

// recipMap의 values값
for(let price of recipMap.values()){
    console.log(price);
}
console.log();

// recipMap의 key, value값이 다 나타난다.
for(let entry of recipMap.entries()){
    console.log(entry);
}
console.log();

// call back함수 지원한다. foreach
recipMap.forEach((value, key, map)=>{
    console.log(`${key} : ${value}`);
});
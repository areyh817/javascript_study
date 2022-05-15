"use strict";

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr));       // "nap", "teachers", "ear"이 출력되어야한다.


function aclean(arr){
    let map = new Map();
    for(let item of arr){
        let sorted = item
                    .toLowerCase()      // pan 
                    .split('')          // [p, a, n]
                    .sort()             // ['a', 'p', 'n']
                    .join('');          // [anp]    sorted는 하나의 형식으로 정리된 값

        map.set(sorted, item);          // 동일한 키가 있는 경우 덮어쓰게 된다.
    }
    return Array.from(map.values());    // 값을 추출한다.
}
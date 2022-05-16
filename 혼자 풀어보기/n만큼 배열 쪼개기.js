/*
주어진 리스트를 순서대로 3개씩 끊어보자. [1, 2, 3, 4, 5] => [[1,2,3], [4, 5]] 
*/

let cnt = 4;
let list = [1, 2, 3, 4, 5];
let res = [];

for(let i = 0; i < list.length; i+=cnt){
    res.push(list.slice(i, i + cnt)); // slice는 end는 포함 되지 않기때문 i + cnt로 헤야함
}

console.log(res);


// 함수 형식으로 나타내기

function cut(list, cnt){
    let res = [];

    for(let i = 0; i < list.length; i += cnt) res.push(list.slice(i, i + cnt));

    return res;
}

/*
  노트북을 이용하는 시간을 문자로 표현했다. 일할 때는 W, 인터넷 서핑이나 게임 등은 R, 노트북을 꺼놨을 때는 O. 하루의 일과를 위의 문자들을 이용해 문자열로 주어질 때, 무엇을 얼마나 했는지를 튜플로 나타내 리턴하세요.

*/

function Tuple(v1, v2) {
    return [ v1, v2 ];
}

function timech(str){
    let cnt = 0;
    let arr = [];

    for(let i = 0; i < str.length; i++){
        if(str[i] == str[i+1]){
            cnt++;
        } else {
            arr.push(new Tuple(str[i], cnt+1))
            cnt = 0;
        }
    }

    return arr;
}

let str = "WWWRRORWW";

console.log(timech(str));